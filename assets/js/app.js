import phrases_animation from "./banner.js";
import skills_progress_bar from "./skills.js";


const skills ={
    html: 55,
    css: 55,
    javascript: 40,
    react:15,
    angular:10,
    node: 20,
    git: 25,
  
}
/*var interval = setInterval(()=>{
    phrases_animation()
},12000)*/

var lista = ['E um biólogo em transição para a tecnologia 👨‍🔬 ➡️ 👨‍💻 .',
'E um louco por insetos ',
'E um fã de quebra cabeça 🧩',
'E um amante dos livros 🤩 📚.',
'E um cinéfilo 🎬 ❤️ 📽️.'
];    

window.addEventListener('scroll', ()=>{
    var header = document.querySelector('.cabecalho__container');
    header.classList.toggle('sticky', window.scrollY > 270);
    observer.observe(target)

    /*if(window.scrollY >= 1456 && time == 0){
        skill_animation()
        time++
    }*/
        
})

var speed = 4000;
var i = 0;
var t = setInterval(function(){
    var slideSource = document.querySelector('.text__animation');
    slideSource.classList.toggle('fade');
    setTimeout(()=>{slideSource.textContent = lista[i]},1000)
    i++
    if(i >= lista.length) i=0
}, speed);

function skill_animation(){
    var lista_tools = document.querySelectorAll('.tools__item')
    lista_tools.forEach((item)=>{
        let datatool =  item.getAttribute('data-tool')
        for(let tool in skills){
            if(tool == datatool){
                skills_progress_bar(tool, skills[tool])
            }
        }
    })
}

var time = 0

var observer = new IntersectionObserver(function (entries){
    if(entries[0].isIntersecting === true && time < 1 ){
        var timeout = setTimeout(()=>{
            skill_animation();
            time++
            clearTimeout(timeout);
        },500) 
    } 
},{threshold:[0.5]})
var target = document.querySelector('#tools')

var icon = document.querySelector('.icon')
var theme =  document.querySelector('#theme')
theme.addEventListener('click',()=>{
    toogletheme()
})

function toogletheme(){
    if(localStorage.getItem('theme') === 'dark_mode'){
        setTheme('light_mode');
    }else{
        setTheme('dark_mode');
    }
}

function setTheme(themeName){
    localStorage.setItem('theme',themeName);
    icon.textContent = themeName;
    document.documentElement.className = themeName
}
(function(){
    if(localStorage.getItem('theme')=== 'dark_mode'){
        setTheme('dark_mode')
    }else{
        setTheme('light_mode')
    }
})();

/*
var observer = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting === true){
        aboutme.classList.remove('section-out')
        aboutme.classList.add('section-enter')
    }else{
        aboutme.classList.remove('section-enter')
        aboutme.classList.add('section-out')
    }
},{threshold:[0.3]})

var skill = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting === true){
        skills.classList.remove('section-out')
        skills.classList.add('section-enter')
    }else{
        skills.classList.remove('section-enter')
        skills.classList.add('section-out')
    }
},{threshold:[0.3]})

var project = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting === true){
        projetcs.classList.remove('section-out')
        projetcs.classList.add('section-enter')
    }else{
        projetcs.classList.remove('section-enter')
        projetcs.classList.add('section-out')
    }
},{threshold:[0.3]})

var contacts = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting === true){
        contact.classList.remove('section-out')
        contact.classList.add('section-enter')
    }else{
        contact.classList.remove('section-enter')
        contact.classList.add('section-out')
    }
},{threshold:[0.3]})

observer.observe(aboutme)
skill.observe(skills)
project.observe(projetcs)
contacts.observe(contact)
*/

