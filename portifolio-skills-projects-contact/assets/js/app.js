import { theme } from "./change-theme.js";
import skills_progress_bar from "./skills.js";

const sections = {
    aboutme: 'meusite.com.br/#aboutme',
    skills: document.querySelector('.skills'),
    projetcs: document.querySelector('.projects'),
    contact: document.querySelector('.contact'),
}
const skills ={
    html: 85,
    css: 80,
    javascript: 60,
    react: 20,
    angular:20,
    git: 20,
    node: 20,
}

var lista_tools = document.querySelectorAll('.tools__item')

lista_tools.forEach((item)=>{
    let datatool =  item.getAttribute('data-tool')
    for(let tool in skills){
        if(tool == datatool){
            skills_progress_bar(tool, skills[tool])
        }
    }
})


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

