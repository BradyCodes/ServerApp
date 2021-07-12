let firebaseConfig = {
    apiKey: ,
    authDomain: ,
    projectId: ,
    storageBucket: ,
    messagingSenderId:,
    appId: ,
    measurementId: 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();








let db = firebase.firestore();

function signup(email, password){
    db.collection('users').doc(document.getElementById('semail').value).set({
        email: document.getElementById('semail').value,
        password: document.getElementById('spassword').value,
        username: document.getElementById('username').value,
        uid: document.getElementById('semail').value + ':' + document.getElementById('spassword').value, 
        plan: 'Spark',
        theme: 'dark',
        icopath: 'https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg',
        
    }).then(()=>{
        let er = document.getElementById('error');
        er.innerHTML = 'Nice! Your account was made successfully!!! To sign in, <br> click Login!';
        er.style.color = 'green';
    }
    );
};


function signin(){
    let ref = db.collection('users').doc(document.getElementById('email').value);
    ref.get().then((doc) => {
        if (doc.exists){
            if (doc.data().email == document.getElementById('email').value && doc.data().password == document.getElementById('password').value){
                window.localStorage.setItem('email', doc.data().email);
                window.localStorage.setItem('password', doc.data().password);
                window.localStorage.setItem('username', doc.data().username);
                window.localStorage.setItem('uid', doc.data().uid);
                window.localStorage.setItem('plan', doc.data().plan);
                window.localStorage.setItem('theme', doc.data().theme);
                window.localStorage.setItem('icopath', doc.data().icopath);
                document.location = 'pages/index.html';
            } else {
                document.getElementById('error').innerHTML = 'Uh Oh! Seems like your email or password is incorrect...';
            };
            console.log("Document data:", doc.data().plan);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            document.getElementById('error').innerHTML = 'Uh Oh! Seems like this user doesn\'t exist :(';
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
        document.getElementById('error').innerHTML = 'Uh Oh! Seems like we can\'t connect to our servers right now :(';
    });
};
