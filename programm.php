<?php

$action = array();

if (isset($_POST['taskfile'])) {
	$tfile_path = "tasks/".$_POST['taskfile'].".txt";
} else {
	echo json_encode($action);
	exit(0);
}

if (file_exists($tfile_path) == FALSE) {
	echo json_encode($action);
	exit(0);
}

define("CMD_BREAK", 0);
define("CMD_IDLE", 1);
define("CMD_MOVE", 2);
define("CMD_STEER", 3);
define("CMD_LIGHT", 4);

$file = fopen($tfile_path, "r");

while(!feof($file))
{
	$zeile = trim(fgets($file,1024));
	if (preg_match("/(?P<name>\w+)\(\s*([^)]+?)\s*\)/", $zeile, $treffer)) {
		//echo "Name:".$treffer['name']."<br />";
		$args = explode(",", $treffer[2]);

		switch($treffer['name']) {
			case 'break':
				if (count($args) == 1) {
					$action[] = array(CMD_BREAK, $args[0]);
				}
			break;
			case 'idle':
				if (count($args) == 1) {
					$action[] = array(CMD_IDLE, $args[0]);
				}
			break;
			case 'move':
				if (count($args) == 1) {
					$action[] = array(CMD_MOVE, $args[0]);
				}
			break;
			case 'steer':
				if (count($args) == 2) {
					$action[] = array(CMD_STEER, $args[0], $args[1]);
				}
			break;
                        case 'light':
                                if (count($args) == 2) {
                                    $action[] = array(CMD_LIGHT, $args[0], $args[1]);
                                }
                        break;
		}
	}
	
}
//print_r($action);
fclose($file);
echo json_encode($action);
?>
