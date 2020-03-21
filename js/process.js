fetch("https://api.thingspeak.com/channels/509782/fields/1/last.txt")
.then( response => response.text())
.then( text => temperature(text))

function temperature(tem){
    document.getElementById('result').value = tem;
    state = document.querySelector('#state');
    effect = document.querySelector('#effect');
    console.log(tem);
    if(tem < 26)
    {
        document.getElementById('state').innerHTML = "อันตราย";
        document.getElementById('effect').innerHTML = "เย็นชิบหาย";
        state.setAttribute("state", "cold");
        effect.setAttribute("effect", "cold");
    }
    else if(tem < 30)
    {
        document.getElementById('state').innerHTML = "ปลอดภัย";
        document.getElementById('effect').innerHTML = "สามารถอยู่ได้อย่างปลอดภัย";
        state.setAttribute("state", "safe");
        effect.setAttribute("effect", "safe");
    }
    else
    {
        document.getElementById('state').innerHTML = "อันตราย";
        document.getElementById('effect').innerHTML = "กลายเป็นปลาย่างไปแล้ว";
        state.setAttribute("state", "hot");
        effect.setAttribute("effect", "hot");
    }
}

