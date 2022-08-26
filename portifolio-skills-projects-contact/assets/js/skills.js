
function skills_progress_bar(element, porcetage){
    let item = document.querySelector('#'+element);
    let label = item.querySelector('.legend__pocentagem');
    let progress_bar = item.querySelector('.bar__progress')
    let number = 0

    var interval = setInterval(()=>{
        label.textContent = number+"%";
        progress_bar.style.width = number+"%";
        if (number >= porcetage){
            clearInterval(interval);
        }
        number++;
    },30)
    
}

export default skills_progress_bar;