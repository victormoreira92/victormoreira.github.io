
function phrases_animation(){

    const phrases = ['E um biólogo em transição para a tecnologia 👨‍🔬 ➡️ 👨‍💻 .',
    'E um louco por insetos 🪲.',
    'E um fan de quebra cabeça 🧩',
    'E um amante de livros 🤩 📚.',
    'E um cinéfilo 🎬 ❤️ 📽️.'
    ];
    var i = 0;
    var element = document.querySelector("#phrase");
    (function loopIt(i) {
        setTimeout(function(){
            element.textContent = phrases[i];
            if(i < phrases.length - 1)  loopIt(i+1)
        }, 2500);
    })(i)
    
}

export default phrases_animation;