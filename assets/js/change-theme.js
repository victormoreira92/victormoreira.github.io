export function theme(){
    var theme = document.querySelector('.material-icons')
    theme.addEventListener('click',function(){
        if(this.textContent == 'dark_mode'){
            this.style.color = 'white';
            this.textContent = 'light_mode';
        }else{
            this.textContent =  'dark_mode';
            this.style.color = 'black';

        }
    })
}

