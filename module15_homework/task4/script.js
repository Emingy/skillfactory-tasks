function func(outputTimezone, outputDateTime){
    outputTimezone.innerHTML=''
    outputDateTime.innerHTML=''
    if ("geolocation" in navigator) {
        console.log(navigator.geolocation.getCurrentPosition)
        /* местоположение доступно */
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            console.log(coords.latitude, coords.longitude);
            fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${coords.latitude}&long=${coords.longitude}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.length!=0) {
                    console.log(data)
                    outputTimezone.innerHTML=`Timezone: ${data.timezone}`
                    outputDateTime.innerHTML=`Date time: ${data.date_time_txt}`
                }else{
                    alert('Error')
                }
            });
            //outputCoord.innerHTML = `Latitude: ${coords.latitude} <br> Longitude: ${coords.longitude}`
        });
    }else{
        /* местоположение недоступно */
        outputTimezone.innerHTML = `Информация о местоположении недоступна`
    }
}