let boton = document.getElementById('boton');
let exit = document.getElementById('exit');
let quotes = [
        '“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi',
        '“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale',
        '"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill',
        '“I never dreamed about success. I worked for it.” —Estée Lauder',
        '“Just one small positive thought in the morning can change your whole day.” — Dalai Lama',
        '“It is never too late to be what you might have been.” — George Eliot',
        '“Life is like riding a bicycle. To keep your balance you must keep moving.” —Albert Einstein',
       '"Muchos piensan en cambiar el mundo, pero casi nadie piensa en cambiarse a sí mismo" —Leon Tolstoi',
       '"La creatividad es la inteligencia divirtiéndose" —Albert Einstein',
       '"Sé amable, porque toda persona que conoces está librando una gran batalla" —Platón',
       '"No cuentes los días. Haz que los días cuenten" —Muhammad Ali',
       '"A veces no conoces el valor de un momento hasta que se ha convertido en un recuerdo" —Dr. Seuss',

    
];

boton.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    exit.innerHTML = randomQuote;
})

