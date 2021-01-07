setInterval(function() {

    const today = new Date().getTime();

    const newYear = new Date("jan 31 2021").getTime();

    const timeLeft = newYear - today;

    var day = timeLeft / (1000 * 60 * 60 * 24);

    var hours = timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60);

    var minutes = timeLeft % (1000 * 60 * 60) / (1000 * 60);

    var second = timeLeft % (1000 * 60) / 1000;


    document.querySelector('.days-left').innerText = Math.floor(day);
    
    document.querySelector('.hours-left').innerText = Math.floor(hours);
    
    document.querySelector('.minutes-left').innerText = Math.floor(minutes);
    
    document.querySelector('.seconds-left').innerText = Math.floor(second);
}, 1000);
