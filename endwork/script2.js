const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');																									
const loginBtn = document.getElementById('loginBtn');																									
const statusDiv = document.getElementById('status');

let usersCache = null;

function showMessage(text, isError = false, isSuccess = false ){
    statusDiv.textContent = text;
    statusDiv.classList.remove("error", "success")
    if (isError){
        statusDiv.classList.add("error");
    }
    if (isSuccess){
        statusDiv.classList.add("success");
    }


}
async function loadUsers(){
    if (usersCache) return usersCache;
    try {
        const response = await fetch("users.txt?t="+Date.now());
        if (!response.ok) throw new Error("Файл не найден");
        const text = await response.text();
        const lines = text.split(/\r?\n/);
        const users = []

        for (let line of lines){
            line = line.trim();
            if(line ==='' || line.startsWith("#")) continue;
            let [login, password] = line.split(':');
            if (login && password){
                users.push({login: login.trim(),password: password.trim()});
            }
        }
        if (users.length === 0){
            usersCache = [
                {login: "admin", password: "123"},
                {login: "maxim", password: "neznay"}
            ];
            showMessage("Файл пуст, по умолчанию: admin - 123", true);
        } else{
            usersCache = users;
        }
        return usersCache;
    }catch(error){
        usersCache = [
                {login: "admin", password: "123"},
                {login: "1", password: "1"},
                {login: "maxim", password: "neznay"}
            ];
        showMessage("Файл не найден, по умолчанию: admin - 123", true);
        return usersCache;
    }
}
    
    


async function checkLogin() {
    const login = loginInput.value.trim() ;
    const password = passwordInput.value;

    if (!login){
        showMessage("Введите логин", true);
        loginInput.focus();
        return;
    }
    if (!password){
        showMessage("Введите пароль", true);
        passwordInput.focus();
        return;
    }
    loginBtn.disabled = true;
    loginBtn.textContent = "Проверяем... ";

    const users = await loadUsers();

    const valid = users.some(user => user.login === login && user.password === password)

    if (valid) {
        showMessage('Добро пожаловать, ' + login, false, true);
        loginBtn.disabled = false;
        loginBtn.textContent = "Войти";
    }
    else{
        showMessage("Неверный логин или пароль", true)
        loginBtn.disabled = false;
        loginBtn.textContent = "Войти";
        passwordInput.value = "";
        passwordInput.focus();
    }


}


loginBtn.addEventListener("click", checkLogin);

[loginInput, passwordInput].forEach(input => {
    input.addEventListener("keypress", (e) => {
        if (e.key ==="Enter") checkLogin;
    });
});

loadUsers();