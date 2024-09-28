

var signUpName = document.querySelector('#signUpName')
var signUpEmail = document.querySelector('#signUpEmail')
var signUpPass  = document.querySelector('#signUpPass')
var signUpBtn = document.querySelector('#signUpBtn')
var emailExist = document.querySelector('#emailExist')
 
var users = []

if (JSON.parse(localStorage.getItem('usersInfo')) != null){
    users = JSON.parse(localStorage.getItem('usersInfo'))
}



function signUp(){
    if (signUpName.value == '' || signUpEmail.value == '' || signUpPass.value == '' ){
        emailExist.innerHTML = `<span class="text-danger my-3">All inputs are required</span>`
    }else {
        for (let i = 0; i < users.length; i++) {
            if(users[i].email.toLowerCase() == signUpEmail.value.toLowerCase()){
                emailExist.innerHTML = `<span class="text-danger my-3">Email already exist</span>`
                return false
            }
        }
        getUserData()
        emailExist.innerHTML = `<span class="text-success my-3">success</span>`
    }
}

function getUserData(){
     var user = {
        name:signUpName.value,
        email:signUpEmail.value,
        pass : signUpPass.value
    }
    users.push(user)
    localStorage.setItem('usersInfo',JSON.stringify(users))
    location.href = 'index.html'
}



signUpBtn?.addEventListener('click',function(){
    signUp()
})

var signInEmail = document.querySelector('#signInEmail')
var signInPass = document.querySelector('#signInPass')
var logBtn = document.querySelector('#logBtn')
var checkInput = document.querySelector('#checkInput')



function signIn(){
    if ( signInEmail.value == '' || signInPass.value == '' ) {
        checkInput.innerHTML = `<span class="text-danger my-3">All inputs are required</span>`
    }else {
        for (let i = 0; i < users.length; i++) {
            if(signInEmail.value.toLowerCase() == users[i].email.toLowerCase() && signInPass.value == users[i].pass){
                checkInput.innerHTML = `<span class="text-success my-3">success</span>`
                localStorage.setItem('userName',JSON.stringify(users[i].name))
                location.href = 'home.html'
                return
            }
        }   
        checkInput.innerHTML = `<span class="text-danger my-3">You should sign up</span>`
    }
}

logBtn?.addEventListener('click',function(){
    signIn()
})

 var homePage = document.querySelector('#homePage')
var loggedUser = localStorage.getItem('userName')

homePage.innerHTML = `<h2 class="text-info">Welcome ${loggedUser}</h2>`
