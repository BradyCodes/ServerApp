if (window.localStorage.getItem('username')){
    document.getElementById('email').value = window.localStorage.getItem('email');
    document.getElementById('password').value = window.localStorage.getItem('password');
} else {
    console.log('slow way >:]');
}

function switch1(){
    document.getElementById('alt2').style.display = 'block';
    document.getElementById('alt1').style.display = 'none';
    document.getElementById('SuForm').style.display = 'block';
    document.getElementById('LoForm').style.display = 'none';
    document.getElementById('btnl').style.display = 'none';
    document.getElementById('btns').style.display = 'block';
    document.getElementById('error').style.color = 'red';
    document.getElementById('error').innerHTML = '';
}  

function switch2(){
    document.getElementById('alt2').style.display = 'none';
    document.getElementById('alt1').style.display = 'block';
    document.getElementById('SuForm').style.display = 'none';
    document.getElementById('LoForm').style.display = 'block';
    document.getElementById('btns').style.display = 'none';
    document.getElementById('btnl').style.display = 'block';
    document.getElementById('error').style.color = 'red';
    document.getElementById('error').innerHTML = '';
}
