import _ from 'lodash';
import '../scss/styles.scss';
import img from '../images/eagle.jpg';
import favIcon from '../images/Day-2-AppIcon.png';

const myImage = document.getElementById('imgbox');
myImage.src = img;

const appIcon = document.getElementById('favcon');
appIcon.href = favIcon;

const inputs = document.querySelectorAll('input.input-field');
inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));

function handleUpdate(){
    //console.log(this.value);
    //console.log(this.dataset);
    //console.log(this.name);
    //console.log(suffix);
    const suffix = this.dataset.sizing || '';
    const inputName = this.name;
    document.documentElement.style.setProperty(`--${inputName}`,this.value+suffix);
    console.log(inputName);
    
}
