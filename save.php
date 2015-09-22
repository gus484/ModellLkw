<?php
	if (isset($_POST['logmsg']) && isset($_POST['logfile']) && isset($_POST['logaction'])) {
		if ($_POST['logaction'] == "remove") {
			echo $_POST['logfile'];
			unlink("logs/".$_POST['logfile']);
		} elseif ($_POST['logaction'] == "save") {
			$logfile = fopen("logs/".$_POST['logfile'].".txt", "a");
			fwrite($logfile, $_POST['logmsg']."\n");
                        fclose($logfile);
		}
	}
?>
