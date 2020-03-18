fetch("https://api.thingspeak.com/channels/509782/fields/1/last.txt")
.then( response => response.text())
.then( text => temperature(text))

function temperature(tem){
    document.getElementById('result').value = tem;
    console.log(tem);
    if(tem < 26)
    {
        document.getElementById('state').innerHTML = "อันตราย";
        document.getElementById('effect').innerHTML = "เย็นชิบหาย";
    }
    else if(tem < 30)
    {
        document.getElementById('state').innerHTML = "ปลอดภัย";
        document.getElementById('effect').innerHTML = "สามารถอยู่ได้อย่างปลอดภัย";
    }
    else
    {
        document.getElementById('state').innerHTML = "อันตราย";
        document.getElementById('effect').innerHTML = "กลายเป็นปลาย่างไปแล้ว";
    }
}

