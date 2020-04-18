fetch("https://api.thingspeak.com/channels/1024701/fields/1/last.txt")
.then( response => response.text())
.then( text => temperature(text))

function temperature(tem){
    document.getElementById('result').value = tem;
    state = document.querySelector('#state');
    pic_state = document.querySelector('#pic-state');
    console.log(tem);
    if(tem < 26)
    {
        document.getElementById('state').innerHTML = "เย็นเกินไป";
        document.getElementById('effect').innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;อุณหภูมิ ณ ขณะนี้อาจทำให้ปลามีภูมิต้านทานโรคน้อยลง อาจติดโรคได้ง่ายและถ้าหากอุณหภูมิเปลี่ยนแบบกังทันหันอาจทำให้ปลาช็อคตายได้";
        state.setAttribute("state", "cold");
        pic_state.setAttribute("src", "pictures/cold.png");
    }
    else if(tem < 30)
    {
        document.getElementById('state').innerHTML = "ปลอดภัย";
        document.getElementById('effect').innerHTML = "อุณหภูมิ ณ ขณะนี้ปลาสามารถมีชีวิตรอดได้อย่างปลอดภัย";
        state.setAttribute("state", "safe");
        pic_state.setAttribute("src", "pictures/safe.png");
    }
    else
    {
        document.getElementById('state').innerHTML = "ร้อนเกินไป";
        document.getElementById('effect').innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;อุณหภูมิ ณ ขณะนี้อาจทำให้ปลาอยากอาหารมากขึ้น อีกทั้งยังอาจส่งผลให้ปลาอยากอาหารมากจนเกินไป และอาจทำให้ปลาช็อคตายได้อีกด้วย";
        state.setAttribute("state", "hot");
        pic_state.setAttribute("src", "pictures/hot.png");
    }
}

