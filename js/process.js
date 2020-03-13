fetch("https://api.thingspeak.com/channels/509782/fields/1/last.txt")
.then( response => response.text())
.then( text => document.getElementById('result').value = text)