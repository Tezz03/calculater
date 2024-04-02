let display = document.getElementById('display')

let buttons = Array.from(document.getElementsByClassName('button')

buttons.map( button =>{
    button.addEventListener('clcik', (e) => {
        switch(e.target.inner){
            case 'c':
                display.innerText = '';
                break;
                case ''
                if(display.innerText){
                    display.innnerText = display.innerText.slice(0,-1);
                }
                break;
                case '='
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!';
                }
                
                break;
            default:
                display.innerText += e.target.innerText;
        }
})
