window.onload = function (){
    const serverUrl = 'wss://echo.websocket.org/'
    const websocket = new WebSocket(serverUrl)
    const btnSend = document.getElementById('b-chat-head-button__send')
    const btnSendGeo = document.getElementById('b-chat-head-button__geo')
    const inpMess = document.getElementById('b-chat-head-input')

    websocket.onopen = function(e){
        Alert('Connected','success')
    }
    websocket.onclose = function(e){
        Alert('Disconnected','error')
    }
    websocket.onmessage = function(e){
        let data = JSON.parse(e.data)
        if(data.flag_geo===false){
            Message(data.mess,'come')
        }
    }
    websocket.onerror = function(e){
        Alert(`Error: ${e.data}`,'error')
    }

    btnSend.onclick = function(){
        SendMessage(inpMess.value, websocket)
    }
    btnSendGeo.onclick = function(){
        SendGeo(websocket)
    }
}
function Alert(message, status){
    let alertBox = document.getElementById('b-chat-body-alert')
    let alertBoxText = document.getElementById('b-chat-body-alert__text')
    if(status=='success'){
        alertBox.style.backgroundColor = 'rgba(0,128,0, 0.6)'
    }else if(status=='error'){
        alertBox.style.backgroundColor = 'rgba(128,0,0, 0.6)'
    }else{
        return 0;
    }
    alertBox.style.display = 'block'
    alertBox.style.opacity = '1'
    alertBoxText.innerHTML = message
    setTimeout(function(){
        alertBox.style.opacity = '0'
    },1500)
    setTimeout(function(){
        alertBox.style.display = 'none'
    },2500)
}
function Message(message,e){
    const chatBody = document.getElementById('b-chat-body');
    const messageHTML = `<div class="b-chat-body-message ${e}">
    <p>${message}</p>
</div>`
    chatBody.innerHTML+= messageHTML

}
function SendMessage(message, websocket){
    let mess = {
        mess: message,
        flag_geo: false
    }
    Message(message,'gone');
    websocket.send(JSON.stringify(mess));
}
function SendGeo(websocket){
    if ("geolocation" in navigator) {
        console.log(navigator.geolocation.getCurrentPosition)
        /* местоположение доступно */
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            console.log(coords.latitude, coords.longitude);
            var messageGeo = {
                mess: `<a href="https://www.openstreetmap.org/?mlat=${coords.latitude}&mlon=${coords.longitude}">Геолокация</a>`,
                flag_geo: true
            }
            Message(messageGeo.mess,'gone');
            websocket.send(JSON.stringify(messageGeo));
        });
    }else{
        /* местоположение недоступно */
        var messageGeo = {
            mess: `Информация о местоположении недоступна`,
            flag_geo: true
        }
        Message(messageGeo.mess,'gone');
        websocket.send(JSON.stringify(messageGeo));
    }
    
}