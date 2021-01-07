function func(outputScreen, outputCoord){
    outputScreen.innerHTML = `Width: ${window.screen.width} <br> Heigth: ${window.screen.height}`
    if ("geolocation" in navigator) {
        console.log(navigator.geolocation.getCurrentPosition)
        /* местоположение доступно */
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            console.log(coords.latitude, coords.longitude);
            outputCoord.innerHTML = `Latitude: ${coords.latitude} <br> Longitude: ${coords.longitude}`
        });
    }else{
        /* местоположение недоступно */
        outputCoord.innerHTML = `Информация о местоположении недоступна`
    }
}