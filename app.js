function prayerTimes() {

    let userCity = document.getElementById('cityName').value;
    console.log('userCity ',userCity);
    let userCountry = document.getElementById('countryName').value;
    console.log('userCountry ',userCountry);
    

    axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${userCity}&country=${userCountry}&method=8`)
    .then(function (response) {
        console.log(response.data.data.timings);
        console.log('Fajr',response.data.data.timings.Fajr);
        console.log('Dhuhr',response.data.data.timings.Dhuhr);
        console.log('asr',response.data.data.timings.Asr);
        console.log('maghrib',response.data.data.timings.Maghrib);
        console.log('isha',response.data.data.timings.Isha);
        
        document.getElementById('fajr').innerText = response.data.data.timings.Fajr;
        document.getElementById('fajr').innerText = response.data.data.timings.Fajr;
        document.getElementById('fajr').innerText = response.data.data.timings.Fajr;
        document.getElementById('fajr').innerText = response.data.data.timings.Fajr;
        document.getElementById('fajr').innerText = response.data.data.timings.Fajr;
    })

}
