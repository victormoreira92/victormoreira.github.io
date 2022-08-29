export function theme(){
    var cabecalho = document.querySelector('.cabecalho')
    
    var theme = document.querySelector('.material-icons')
    theme.addEventListener('click',function(){
        if(this.textContent == 'dark_mode'){
            this.style.color = 'white';
            this.textContent = 'light_mode';
            cabecalho.classList.add('dark')
        }else{
            this.textContent =  'dark_mode';
            this.style.color = 'black';

        }
    })
}

