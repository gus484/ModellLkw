<?php
header('Content-Type: text/html');

if (isset($_POST['dir'])) {
	$dir = $_POST['dir'];
	$handle=opendir ($dir);

	$html = '<table>';
	$html.= '<tr><th style="width:200px;text-align:left;">Logfile-Name</th><th style="width:100px;text-align:center;">Option</th></tr>';
	while ($datei = readdir ($handle)) {
		if ($datei != "." && $datei != "..") {
			$html .= '<tr><td><a href="logs/'.$datei.'">'.$datei.'</a></td>';
			$html .= '<td style="text-align:center;"><a id="'. $datei .'" class="loglink" href="#">x</a></td></tr>';
		}
	}
	closedir($handle);
	$html .= '</table>';
	echo $html;
}
else {
	echo '<p>Error</p>' . "\n";
	exit();
}

?>
