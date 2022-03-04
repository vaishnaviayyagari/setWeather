const select =document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change',setWeather);

function setWeather(){
    const choice=select.value;

    switch(choice){
        case 'sunny':
            para.textContent='its summer';
            break;

        case 'rainy':
            para.textContent="its rainy";
            break;    
    
        case 'winter':
            para.textContent="its cold outside";
            break;
        case 'cloudy':
            para.textContent='its cloudy and seems to rain';
            break;
        default:
            para.textContent='';
                    
    }

}