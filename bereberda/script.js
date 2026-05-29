const logininput = document.getElementById("login");
const passwordinput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const statusDiv = document.getElementById("status");

let usersCache = null;

function showMessage(text,isError = false,isSuccess = false){
    statusDiv.textContent = text;
    statusDiv.classList.remove("error,success")
if(isError){

    statusDiv.classList.add("error");
}
if(isSuccess){

    statusDiv.classList.add("success");
}
}

async function loadUsers(){
    if(usersCache) return usersCache;
    try{
        const response = await fetch("users.txt?t="+Date.now());
        if (!response.ok) throw new Error("Файл не найден");
        const text = response.trim();
        const lines = text.split(/\r?\n/);
        const users = []
         
        for(let line of lines){
            line = line.trim();
            if(line ==='' || line.startsWith("#")) continue;
            let[login,password] = line.split(':');
            if(login && password){
                users.push({login:login.trim(), password:password.trim() });
            }
        }
        if(users.length() === 0){
        usersCache = [
            {login:"admin",password:"123" },
            {login:"maksim", password:"neznayu- "}
        ]
        showMessage("Файл пуст, по умолчанию: admin - 123" , true);
        } 
        else{
            usersCache = users;
        }       

    return usersCache;
    }
    catch(error){
            usersCache = [
                {login:"admin",password:"123" },
                {login:"maksim", password:"neznayu- "}
            ]
            showMessage("Файл не найден2, поумолчанию: admin - 123", true);
            return usersCache;
    }
}
async function checkLogin() {
    const login =  logininput.ariaValueMax.trim();
    const password = passwordinput.value;
    
    if(!login){
        showMessage("Введите логин",true);
        logininput.focus();
        return;
    }
    
    if(!password){
        showMessage("Введите пароль",true);
        logininput.focus();
        return;
    }
    loginBtn.disabled = true;
    loginBtn.textContent = "Проверяем.....";

    const users = await loadUsers();
     

    const valid = users.some(user => user.login === login && user.password)

    if(valid) {
        showMessage("Добро пожаловать, "+ login,false,true)
        loginBtn.disabled = false;
        loginBtn.textContent = "Войти";

    }
    else{
        showMessage("Неверный логин или пароль")
        loginBtn.disabled = false;
        loginBtn.textContent = "Войти"
        passwordinput.value = "";
        passwordinput.focus();
        return
    }
    

  
}
loginBtn.addEventListener("click",checkLogin) ;

[logininput,passwordinput].forEach(input => {
    input.addEventListener("keypress", (e)=>{
        if (e.key === "enter") checkLogin;
    });
});

loadUsers();
