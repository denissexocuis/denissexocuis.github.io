var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});


typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Codificando soluciones, creando programas')
    .pauseFor(2500)
    //caracteres que se borrarán
    .deleteChars(9)
    .typeString('<strong>Posibilidades</strong>')
    .pauseFor(2500)
    .start();