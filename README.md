# LKW Modell

## Verbinden

Mit dem Hotspot des RED-Brick per WLAN verbinden und die URL der Steuerungsoberfläche aufrufen.

`http://192.168.42.1/programs/LKW-Model/bin/`

WLAN Passwort: "red-brick42"

## Logdatein

Logdateien werden automatisch generiert und speichern neben einem Zeitstempel die Querbeschleunigung (ay). Sie können im Bereich "Log-Files" heruntergeladen und gelöscht werden.

##Graph

Der Graph stellt die Querbeschleunigung während einer Kreisfahrt dar.

##Kreisfahrt
Werte für Geschwindigkeit und Richtungseinschlag einstellen. Startknopf drücken. Zum Beenden den Stopknopf am oberen Bildschirmrand drücken.

##Lichter

Angeschlossen an IO16 wie folgt:

* Frontlicht: PORT B, PIN 0, PIN 1
* Rücklicht: PORT B PIN 2, PIN 3
* Blinker rechts: PORT B, PIN 4, PIN 5
* Blinker links: PORT B, PIN 6, PIN 7

##Werte (ermittelt):

Rechtskurve: -5000

Linkskurve: 6500

##Programme (tastks):
Müssen im Programmordner "tastks" angelegt werden und auf die Dateiendung ".txt" enden. Außerdem ist ein entsprechender Button im Quelltext anzulegen und im ID-Parameter der Dateiname anzugeben.

Beispiel:
`<a id="light" class="button task" href="">Licht-Test</a>`

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