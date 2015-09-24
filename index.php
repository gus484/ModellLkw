<!DOCTYPE html>
<html> 
<head>
	<title>Modell LKW</title>
	<meta charset="UTF-8" />
	<meta name="description" content="Kurzbeschreibung" />
	<script src="script/jquery-min.js"></script>
	<script src="jquery-ui/jquery-ui.min.js"></script>
	<script src="flot/jquery.flot.min.js"></script>
        <script src="script/jquery.flot.axislabels.js"></script>
	<script src="./Tinkerforge.js" type='text/javascript'></script>
	<link href="style.css" type="text/css" rel="stylesheet" />
	<link rel="stylesheet" href="jquery-ui/jquery-ui.css">
</head>
<script type="text/javascript">
$(document).ready(function(){
	var ipcon;
	var imu = undefined;
	var servo = undefined;
	var io16 = undefined;
	var run = false;
	var HOST = "192.168.42.1"; // 192.168.42.1
	var PORT = 4280;
	var SERVO_VELOCITY = 0;
	var SERVO_DIRECTION = 1;
	var LOOP_RATE = 100; // ms
        
var options = {
        axisLabels: {
            show: true
        },
        xaxes: [{
            axisLabel: 'Zeit in s',
        }],
        yaxes: [{
            position: 'left',
            axisLabel: 'Querbeschleunigung ay in m/s²',
        }]
    };

	var chart_idx = 0;
	var data = [[0, 0]];
	var plot = $.plot($("#chart"), [data], options);
	var logfile_name = "";
	//data.push([0.9,1.4]);
	//data.pop(0);
	//alert(data.length);
        
        //-----------------------------
        // Light Variables
        var FRONT_LIGHT_PINS = 0x03;
        var FRONT_LIGHT_PORT = 'b';
        var BACK_LIGHT_PINS = 0x0C;
        var BACK_LIGHT_PORT = 'b';
        var BLINKER_RIGHT_PINS = 0x30;
        var BLINKER_RIGHT_PORT = 'b';
        var BLINKER_LEFT_PINS = 0xC0;
        var BLINKER_LEFT_PORT = 'b';
        var BLINKER_RATE = 600;
        var clr_blinker_id = 0;
	
	// Task Handler Vars
	var LOOP_RATE_TASK = 100;
	var CMD_BREAK = 0;
	var CMD_IDLE = 1;
	var CMD_MOVE = 2;
	var CMD_STEER = 3;
        var CMD_LIGHT = 4;

	var task_idx = 0;
	var task_time = 0;
	var task_end_time = 0;
	var task_active = false;
	var task_arr = [];
        var task_log = "";

	$('#logbox').val("");

	if(ipcon !== undefined) {
		ipcon.disconnect();
	}
	ipcon = new Tinkerforge.IPConnection(); // Create IP connection
	ipcon.connect(HOST, PORT,
		function(error) {
			alert('Error: '+error+ '\n');
		}
	); // Connect to brickd
	// Don't use device before ipcon is connected

	// Register Connected Callback
	ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED,
		function(connectReason) {
			// Trigger Enumerate
			ipcon.enumerate();
		}
	);
	
	// Unregister
	ipcon.on(Tinkerforge.IPConnection.CALLBACK_DISCONNECTED,
		function(connectReason) {
			debug("Tinkerforge disconnected!");
			servo = undefined;
			io16 = undefined;
			imu = undefined;
			run = false;
	});

	// Register Enumerate Callback
	ipcon.on(Tinkerforge.IPConnection.CALLBACK_ENUMERATE,
		// Print incoming enumeration
		function(uid, connectedUid, position, hardwareVersion,
			firmwareVersion, deviceIdentifier, enumerationType) {
			//textArea.value += 'UID:               '+uid+'\n';
			//textArea.value += 'Enumeration Type:  '+enumerationType+'\n';
			if(enumerationType === Tinkerforge.IPConnection.ENUMERATION_TYPE_DISCONNECTED) {
				//textArea.value += '\n';
				//textArea.scrollTop = textArea.scrollHeight;
				return;
			}
			if (deviceIdentifier == Tinkerforge.BrickIMU.DEVICE_IDENTIFIER) {
				debug("Found IMU with UID:" + uid);
				imu = new Tinkerforge.BrickIMU(uid, ipcon);
                                //run = true;
                                //setTimeout(timer, LOOP_RATE);
			} else if (deviceIdentifier == Tinkerforge.BrickletAmbientLight.DEVICE_IDENTIFIER) {
				debug("Found AmbientLight with UID:" + uid);
			} else if (deviceIdentifier == Tinkerforge.BrickServo.DEVICE_IDENTIFIER) {
				if (servo != undefined)
					return;
				debug("Found Servo with UID:" + uid);
				servo = new Tinkerforge.BrickServo(uid, ipcon); // Create device object
				servo.setOutputVoltage(5000);

				servo.enable( SERVO_VELOCITY);
				servo.enable( SERVO_DIRECTION);

				servo.setPosition(SERVO_VELOCITY, 0);
				servo.setPosition(SERVO_DIRECTION, 0);

				//setPosition(servoNum, position[, returnCallback][, errorCallback]);
			} else if (deviceIdentifier == Tinkerforge.BrickletIO16.DEVICE_IDENTIFIER) {
				if (io16 != undefined)
					return;
				debug("Found IO16 with UID:" + uid);
				io16 = new Tinkerforge.BrickletIO16(uid, ipcon); // Create device object
                                // Alle Pins an Port B auf Ausgang setzen (ausgeschaltet)
                                // io16.DIRECTION_OUT
                                io16.setPortConfiguration('b', 255, 'o', false);
                                io16.setPort('b', 0);

                                //alert(io16.getPort('b'));
                                // starte Timer fuer Blinker
                                //setTimeout(blinker, BLINKER_RATE);
			}
		}
	);

        // ---------------------------------------------------------------------
        // Stoppe den LKW, wenn die Seite verlassen wird
        $(window).on('unload', function(){
            stopServo();
            turnAllLightsOff();
            //logging("Test", "Test", true);
            //return 'Are you sure you want to leave?';
        });

        // ---------------------------------------------------------------------
        // Notaus
	$("#btn_stop").click(function() {
                run = false;
		stopServo();
                resetGraph();                
		return false;
	});

        // ---------------------------------------------------------------------
	// Lichtsteuerung
	$(".light_control").change(function() {
		if (io16 == undefined)
                    return false;

		switch (this.id) {
			case "cb_front_light":
                            io16.getPort(FRONT_LIGHT_PORT, function (valueMask) {
                                if ($('#cb_front_light').prop('checked')) {
                                    // turn front light on
                                    pins = valueMask | FRONT_LIGHT_PINS;
                                    io16.setPort(FRONT_LIGHT_PORT, pins);

                                } else {
                                    // turn fornt light off
                                    pins = valueMask & (FRONT_LIGHT_PINS ^ 0xFF);
                                    io16.setPort(FRONT_LIGHT_PORT,pins);
                                }                                
                            });

			break;
                        case "cb_back_light":
                            io16.getPort(BACK_LIGHT_PORT, function (valueMask) {
                                if ($('#cb_back_light').prop('checked')) {
                                    // turn back light on
                                    pins = valueMask | BACK_LIGHT_PINS;
                                    io16.setPort(BACK_LIGHT_PORT, pins);

                                } else {
                                    // turn back light off
                                    pins = valueMask & (BACK_LIGHT_PINS ^ 0xFF);
                                    io16.setPort(BACK_LIGHT_PORT,pins);
                                }                              
                            });
                     
                        break;
                        case "cb_blinker_left":
                            io16.getPort(BLINKER_LEFT_PORT, function (valueMask) {
                                 if ($('#cb_blinker_left').prop('checked')) {
                                    // turn blinker left light on
                                    pins = valueMask | BLINKER_LEFT_PINS;
                                    io16.setPort(BLINKER_LEFT_PORT, pins);
                                    clr_blinker_id = setInterval(blinker, BLINKER_RATE);                                
                                } else {
                                    // turn fornt light off
                                    pins = valueMask & (BLINKER_LEFT_PINS ^ 0xFF);
                                    io16.setPort(BLINKER_LEFT_PORT,pins);
                                    clearInterval(clr_blinker_id);
                                }
                            });
                        break;
                        case "cb_blinker_right":
                            io16.getPort('BLINKER_RIGHT_PORT', function (valueMask) {                                
                                if ($('#cb_blinker_right').prop('checked')) {
                                    // turn blinker left light on
                                    pins = valueMask | BLINKER_RIGHT_PINS;
                                    io16.setPort(BLINKER_RIGHT_PORT, pins);
                                    clr_blinker_id = setInterval(blinker, BLINKER_RATE);
                                } else {
                                    // turn fornt light off                                 
                                    pins = valueMask & (BLINKER_RIGHT_PINS ^ 0xFF);
                                    io16.setPort(BLINKER_RIGHT_PORT,pins);
                                    clearInterval(clr_blinker_id);
                                }                        
                            });                            
                        break;
			default:
				alert(this.id);
			break;
		}

		if (io16 == undefined)
			return;

		if(this.checked) {
			//Do stuff
		}
	});
        
        // Alle Lichter ausschalten
        function turnAllLightsOff() {
            if (io16 == undefined)
                return;
            io16.setPort('b', 0x00);
        }

        // Loeschen einer Logdatei
	$("#loglist").on("click", ".loglink", function() {
		$.ajax({
			method: "POST",
			url: "save.php",
			data: { logfile: this.id, logmsg: "r", logaction: "remove"}
		})
		.done(function( msg ) {
			loadLogList();
		});
		return false;
	});

        // veraltet?
	$("#btn_logging").click(function() {
		chart_idx = 0;
		data = [[0, 0]]
		plot.setData([data]);
		plot.setupGrid();
		plot.draw();
		logging("Test");
		run = true;
		setTimeout(timer, 5);
		return false;
	});

	$("#btn_kreisfahrt").click(function() {
		if (servo == undefined) {
                    debug("Fehler! Kein Servo Brick!")
                    return false;
                }
		debug("Starte Kreisfahrt!");
		resetGraph();
		logfile_name = getLogfileName();
                logging(logfile_name, "Kreisfahrt", true);

		run = true;
		servo.setPosition(SERVO_VELOCITY, parseInt($('#slider-kf-velocity').slider( "value" )));
		servo.setPosition(SERVO_DIRECTION, parseInt($('#slider-kf-direction').slider( "value" )));

		servo.enable(SERVO_VELOCITY);
		servo.enable(SERVO_DIRECTION);
		
		setTimeout(timer, 20);
		
		return false;
	});
	
        // Event bei Click auf ein Programm (Task)
	$(".task").click(function() {
                run = false;
		if (servo == undefined) {
			debug("Task kann nicht gestartet werden! (kein TF-Verbindung)");
			//return false;
		}
		var task = this.id;
		$.ajax({
			method: "POST",
			url: "programm.php",
			dataType: "json",
			data: {taskfile: task}
		})
		.done(function( msg ) {
			task_arr = msg;
			if (task_arr.length == 0) {
				debug("Task kann nicht gestartet werden! (kein Programm)");
				return false;
			}
			//ToDO
                        task_log = getLogfileName() + "_Task";
                        logging(task_log, "Test", true);
			startTask(task);
		});
		return false;
	});
        
        // Graphen zuruecksetzen
        function resetGraph() {
            chart_idx = 0;
            data = [[0, 0]]
            plot.setData([data]);
            plot.setupGrid();
            plot.draw();       
        }

        // Stoppen der Servomotoren, Lenkung auf Mittelstellung
	function stopServo() {
		// stop data logging (imu, ...)
		run = false;

		task_active = false;
		task_idx = 0;
		task_time = 0;
		task_end_time = 0;

		if (servo == undefined)
			return;

		servo.setPosition(SERVO_VELOCITY, 0);
		servo.setPosition(SERVO_DIRECTION, 0);

		servo.disable(SERVO_VELOCITY);
		servo.disable(SERVO_DIRECTION);
	}

        // Generierung eines neuen Logdateinamens auf Basis der aktuellen Zeit
	function getLogfileName() {
		var d = new Date();
		ds = d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + 
			"_" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
		return ds;
	}

        // Eintrag per ajax Aufruf in Logdatei schreiben
	function logging(file_name, data, new_logfile = false) {
		//ds = getLogfileName();
		$.ajax({
			method: "POST",
			url: "save.php",
			data: { logfile: file_name, logmsg: data, logaction: "save"}
		})
		.done(function( msg ) {
                    if (new_logfile) // falls es eine neue Logdatei ist, muss die Logdateiliste aktualisiert werden
                        loadLogList();
		});
	}

        // Eintrag in Debug-Box schreiben
	function debug(data) {
		$('#logbox').val( new Date().getTime() + '::' + data + '\n' + $('#logbox').val());
	}

        // ajax Aufruf von loglist.php um alle Logdateien im Verz. "logs" zu bekommen
	function loadLogList() {
		$.ajax({
			method: "POST",
			url: "loglist.php",
			dataType: 'html',
			data: {dir: "logs"}
		})
		.success( function(html) {
			$('#loglist').html(html);
		});
	}

	function timer() {
		if (imu != undefined) {
			imu.getAcceleration(function(x,y,z) {
				chart_idx++;
				//logging(logfile_name, $.now() + "::" + x + "::" + y + "::" + z, false);
                                logging(logfile_name, $.now() + "::" + (y/1000.0*9.80605), false);
				while (data.length >= 50) {
					data.shift();
				}
                                // convert from mG to m/s²
                                //data.push([chart_idx,y/1000.0]);
				data.push([chart_idx,y/1000.0*9.80605]);

				plot.setData([data]);
				plot.setupGrid();
				plot.draw();
			});
		}
		if (run == true)
			setTimeout(timer, LOOP_RATE);
	}
	
	// Task Handler -----------------------------------------------------

	function startTask(task_name = "unnamed") {
		debug("Start Task" + " " + task_name + "!");
		task_active = true;
		task_idx = 0;
		task_time = -10;

		executeTask();
		setTimeout(handleTask, LOOP_RATE_TASK);
	}

	function handleTask() {
		task_time += LOOP_RATE_TASK;
		
		if (task_time >= task_end_time) {
			task_time = 0;
			task_idx++;
			if (task_idx < task_arr.length) {
				executeTask();
				setTimeout(handleTask, LOOP_RATE_TASK);
			} else {
                                debug("Task beendet!");
				task_active = false;
				task_idx = 0;
			}			
			return;
		}
		else {
			// restart task timer
			setTimeout(handleTask, LOOP_RATE_TASK);
			return;
		}
		
	}

	function executeTask() {
		switch(task_arr[task_idx][0]) {
			case CMD_IDLE:
				//alert("IDLE");
				task_end_time = task_arr[task_idx][1];
			break;
			case CMD_BREAK:
				//alert("BREAK");
                                debug("Break!");
                                var d = parseInt(task_arr[task_idx][1]);
                                servo.setPosition(SERVO_VELOCITY, d);
                                servo.enable(SERVO_VELOCITY);
                                
				task_end_time = 10;
				servo.setPosition(SERVO_VELOCITY, task_arr[task_idx][1]);
				$("#slider-kf-velocity").slider('value', task_arr[task_idx][1]);
				$("#kf_velocity").val(task_arr[task_idx][1]);
			break;
			case CMD_MOVE:
				//alert("MOVE");
                                debug("Move!");
                                var d = parseInt(task_arr[task_idx][1]);
                                servo.setPosition(SERVO_VELOCITY, d);
                                servo.enable(SERVO_VELOCITY);
                
				task_end_time = 10;
				$("#slider-kf-velocity").slider('value',task_arr[task_idx][1]);
				$("#kf_velocity").val(task_arr[task_idx][1]);
			break;
			case CMD_STEER:
				//alert("STEER");
                                debug("Steer!");
				task_end_time = 10;
				if (task_arr[task_idx][1] == 'left')
					var d = parseInt(task_arr[task_idx][2]);
				else
					var d = parseInt(task_arr[task_idx][2])*-1;
				servo.setPosition(SERVO_DIRECTION, d);
                                servo.enable(SERVO_DIRECTION);
				$("#slider-kf-direction").slider('value', d);
				$("#kf_direction").val(d);
			break;
                        case CMD_LIGHT:
                                //alert("LIGHT");
                                // front light
                                if (task_arr[task_idx][1] == 'front' && task_arr[task_idx][2] == 'on')
                                    $('#cb_front_light').prop('checked', true).trigger("change");
                                if (task_arr[task_idx][1] == 'front' && task_arr[task_idx][2] == 'off')
                                    $('#cb_front_light').prop('checked', false).trigger("change");
                                // back light
                                if (task_arr[task_idx][1] == 'back' && task_arr[task_idx][2] == 'on')
                                    $('#cb_back_light').prop('checked', true).trigger("change");
                                if (task_arr[task_idx][1] == 'back' && task_arr[task_idx][2] == 'off')
                                    $('#cb_back_light').prop('checked', false).trigger("change");
                                // blinker left
                                if (task_arr[task_idx][1] == 'blinker_left' && task_arr[task_idx][2] == 'on')
                                    $('#cb_blinker_left').prop('checked', true).trigger("change");
                                if (task_arr[task_idx][1] == 'blinker_left' && task_arr[task_idx][2] == 'off')
                                    $('#cb_blinker_left').prop('checked', false).trigger("change");
                                // blinker right
                                if (task_arr[task_idx][1] == 'blinker_right' && task_arr[task_idx][2] == 'on')
                                    $('#cb_blinker_right').prop('checked', true).trigger("change");
                                if (task_arr[task_idx][1] == 'blinker_right' && task_arr[task_idx][2] == 'off')
                                    $('#cb_blinker_right').prop('checked', false).trigger("change");
                                
                        break;
		}
		return;
	}

	// -----------------------------------------------------------------

	function blinker() {
            var act = 0;
            if (io16 == undefined)
                return;
            if ($('#cb_blinker_left').prop('checked')) {
                pins = io16.getPort(BLINKER_LEFT_PORT, function (valueMask) {
                    pins = valueMask^BLINKER_LEFT_PINS;
                    io16.setPort(BLINKER_LEFT_PORT, pins);
                });
                act = act + 1;
            }
            if ($('#cb_blinker_right').prop('checked')) {
                io16.getPort(BLINKER_RIGHT_PORT, function (valueMask) {
                    pins = valueMask ^ BLINKER_RIGHT_PINS;
                    io16.setPort(BLINKER_RIGHT_PORT, pins);
                });
                act = act + 1;
            }
            if (act == 0) {
                debug("Hier");
                 clearInterval(clr_blinker_id);
             }
	}

	// ----------------------------------------------------
        // Initialisiere UI-Elemente

        // lade Logdateien Liste
	loadLogList();

	$( "#slider-kf-velocity" ).slider({
		range: "min",
		value: 0,
		min: -9000,
		max: 9000,
		slide: function( event, ui ) {
			$( "#kf_velocity" ).val( ui.value );
		}
        });
	$( "#slider-kf-direction" ).slider({
		range: "min",
		value: 0,
		min: -5000,
		max: 6500,
		slide: function( event, ui ) {
			$( "#kf_direction" ).val( ui.value );
		}
    });
    $( "#kf_velocity" ).val( + $( "#slider-kf-direction" ).slider( "value" ) );
    $( "#kf_direction" ).val( + $( "#slider-kf-direction" ).slider( "value" ) );
});
</script>
<body>
<div><a id="btn_stop" class="button" href="">Stop</a>
</div>
<div style="float:left">
	<div class="drive_tests">
		<p class="headline">Kreisfahrt</p>
		<div class="drive_tests_content">
			<p>
				<label for="kf_velocity">Geschwindigkeit:</label>
				<input type="text" id="kf_velocity" readonly style="border:0; color:#f6931f; font-weight:bold;">
			</p>
				<div id="slider-kf-velocity"></div>
			<p>
				<label for="kf_direction">Lenkeinschlag:</label>
				<input type="text" id="kf_direction" readonly style="border:0; color:#f6931f; font-weight:bold;">
			</p>
				<div id="slider-kf-direction"></div>
			<p>
				<a id="btn_kreisfahrt" class="button" href="">Start</a>
			</p>
		</div>
	</div>
	<div class="drive_tests">
		<p class="headline">Programme</p>
		<div class="drive_tests_content">
			<a id="p1" class="button task" href="">Start-Stop-Fahrt</a>
                        <a id="light" class="button task" href="">Licht-Test</a>
		</div>
	</div>
	<div class="drive_tests">
		<p class="headline">Lichtsteuerung</p>
		<div class="drive_tests_content">
			<input class="light_control" id="cb_front_light" type="checkbox"><label for="cb_front_light">Frontlicht</label>
			<input class="light_control" id="cb_back_light" type="checkbox"><label for="cb_back_light">Rücklicht</label>
			<input class="light_control" id="cb_blinker_right" type="checkbox"><label for="cb_blinker_right">Blinker (rechts)</label>
			<input class="light_control" id="cb_blinker_left" type="checkbox"><label for="cb_blinker_left">Blinker (links)</label>
		</div>
	</div>
</div>
<div style="float:left;margin-left:20px;">
	<div id="chart" style="width:600px;height:300px"></div>
	<div class="drive_tests">
		<p class="headline">Log-Files</p>
		<div id="loglist" class="drive_tests_content">
		</div>
	</div>
        <div class="drive_tests">
        <p class="headline">Debug</p>
	<textarea style="resize: none;" id="logbox"></textarea>
        </div>
</div>
</body>
</html>
