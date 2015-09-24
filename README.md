# ModellLkw

[ModellLkw im GitHub](https://github.com/gus484/ModellLkw)

Benötigt werden folgende Komponenten:

* [RED Brick](http://www.tinkerforge.com/de/doc/Hardware/Bricks/RED_Brick.html)
* [IMU Brick (v1)](http://www.tinkerforge.com/de/doc/Hardware/Bricks/IMU_Brick.html)
* [Servo Brick](http://www.tinkerforge.com/de/doc/Hardware/Bricks/Servo_Brick.html)
* [IO16 Bricklet](http://www.tinkerforge.com/de/doc/Hardware/Bricklets/IO16.html)
* [Step-Down (Stromversorgung)](http://www.tinkerforge.com/de/doc/Hardware/Power_Supplies/Step_Down.html)
* WLAN-Stick

##Installation
<u>Neustes Image auf RED-Brick laden</u>

* [RED Brick Image](http://www.tinkerforge.com/de/doc/Downloads.html)
* [Install-Anleitung](http://www.tinkerforge.com/de/doc/Hardware/Bricks/RED_Brick.html#image-auf-sd-karte-kopieren)

<u>Settigs -> File System</u>

Reboot and Expand ausführen

<u>Settings -> Serivces</u>

* Web Server aktivieren
* Access Point aktivieren

<u>Settings -> Access Point</u>

* Interface: WLAN0
* IP: 192.168.42.1
* Subnet Mask:255.255.255.0
* SSID: RED Brick
* WPA-Key: red-brick42
* Channel: 1
* Enable DNS/DHCP Haken setzen
* DHCP Pool Start: 192.168.41.50
* DHCP Pool End: 192.168.41.254
* DHCP Subnet Mask: 255.255.255.0

Save Schaltfläche anklicken

<u>Settigns -> Brick Daemon</u>

* WebSocket Port: 4280

## Projekt anlegen

Program -> New

<u>Step 1</u>

* Name: ModellLKW
* Language: JavaScript (Browser/Node.js)

<u>Step 2</u>

* Add Directory
* Projekt Ordner wählen

<u>Step 3</u>

* JavaScript Flavor: Client-Side (Browser)

Sollte das Logdateien-Verzeichnis bei der Übertragung leer sein, dann wird dieses Verzeichnis nicht angelegt. Es muss nun manuell angelegt werden. In jedem Fall müssen die Rechte des Verzeichnises angepasst werden.

`ssh tf@192.168.42.1` SSH-Verbindung aufbauen und mit Passwort "tf" einloggen

`cd /programs/ModellLkw/bin` ins Projekt-Verzeichnis wechseln

`mkdir logs` Logverzeichnis anlegen

`chmod 777 logs -R` Rechte vergeben


## Verbinden

Mit dem Hotspot des RED-Brick per WLAN verbinden und die URL der Steuerungsoberfläche aufrufen.

* `http://192.168.42.1/programs/LKW-Model/bin/`

* SSID:"RED Brick" (Standard)

* WLAN Passwort: "red-brick42" (Standard)

## Logdatein

Logdateien werden automatisch generiert und speichern neben einem Zeitstempel die Querbeschleunigung (ay). Sie können im Bereich "Log-Files" heruntergeladen und gelöscht werden. Für Programme (tasks) werden derzeit keine Logdateien geschrieben.

##Graph

Der Graph stellt die Querbeschleunigung über die Zeit während einer Kreisfahrt dar.

##Kreisfahrt
Werte für Geschwindigkeit und Richtungseinschlag einstellen. Startknopf drücken. Zum Beenden den Stopknopf am oberen Bildschirmrand drücken.

##Lichter

Verkabelung (Stand 23.09.2015):

* sw ....... +
* rot/sw ... Bremslicht
* rot ...... Rücklicht
* gelb ..... Blinker
* grün ..... Rückfahrlicht

Angeschlossen an IO16 wie folgt:

* Frontlicht: PORT B, PIN 0, PIN 1
* Rücklicht: PORT B PIN 2, PIN 3
* Blinker rechts: PORT B, PIN 4, PIN 5
* Blinker links: PORT B, PIN 6, PIN 7

Es können die jeweils gleichgeschalteten Lichter (LEDs) auch an einen Pin gehangen werden, aber es muss die Strombelastbarkeit des Bricklets berücksichtigt werden (20 mA pro Ausgang und maximal 125 mA gesamt).

[IO16 Beschreibung](http://www.tinkerforge.com/de/doc/Hardware/Bricklets/IO16.html)

##Werte (ermittelt):

Rechtskurve: -5000

Linkskurve: 6500

##Programme (tasks):
Mittels Programmen (tasks) lassen sich automatisch eine Abfolge von Befehlen ausführen. Pro Zeile darf in der Datei nur ein Befehl stehen.
Die Dateien müssen im Programmordner "tasks" abgelegt werden und auf die Dateiendung ".txt" enden. Außerdem ist ein entsprechender Button im Quelltext anzulegen und der Dateiname ohne Endung im ID-Parameter der Dateiname anzugeben. Groß- und Kleinschreibung wird berücksichtigt! 

Beispiel für die Datei "light.txt" und den Programmnamen "Licht-Test":

`<div class="drive_tests_content">`

`...` andere Programme

`<a id="light" class="button task" href="">Licht-Test</a>`

`</div>`

**Eine Validierung der Programme erfolgt nicht, d.h. falschgeschriebene Kommandos werden nicht ausgeführt und können ggf. zum Absturz führen!!!**


###Keine Aktion ausführen für t in ms
`idle(int t)` 


###Bremsen
`break(int value)`

###Fahren
`move (int value)`

value maximal 9000, aber bereits ab 2000 sehr schnell!!!

###Lenken
`steer(string direction, int value)`

*direction: "left", "right"*

###Licht

`light(string light, int state)`

*light: "front", "back", "blinker_right", "blinker_left"*

*state "on", "off"*

##TODO
* automatische Erkennung der Programme (Tasks)
* Konfigurierbarkeit von Logdateien
* Konfigurierbarkeit des Graphens