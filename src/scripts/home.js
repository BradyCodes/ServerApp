let username = document.getElementById('username');
let plan = document.getElementById('plan');
let status = document.getElementById('status');
let usernamew = document.getElementById('usernamew');


let u = window.localStorage.getItem('username');
let p = window.localStorage.getItem('plan');

username.innerHTML = u;
usernamew.innerHTML = u;
plan.innerHTML = p;

