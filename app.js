document.querySelector('.hide').style.display = 'none';
document.querySelector('.isChecked').addEventListener('click', () => {
    if(getComputedStyle(document.querySelector('.hide')).display != 'none') {
        document.querySelector('.hide').style.display = 'none';
    } else {
        document.querySelector('.hide').style.display = 'block';
    }
})
