var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Te esperamos en nuestras oficinas!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Podemos brindarte la solucion que necesitas')
    .pauseFor(2500)
    .deleteChars(7)
    .start();