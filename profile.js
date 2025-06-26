const warning = document.getElementById('warn');
const sucess_tag = document.getElementById('sucess-msg');

function processChanges() {
    const registered_users = JSON.parse(localStorage.getItem('registered_users') ?? '[]');

    const currentUsername = document.getElementById('security-input-name').value;
    const currentPassword = document.getElementById('security-input-password').value;

    const newUsername = document.getElementById('input-username').value;
    const newEmail = document.getElementById('input-email').value;
    const newPassword = document.getElementById('input-password').value;
    const confirmPassword = document.getElementById('input-confirm-password').value;


    const finded_user = registered_users.find(u => u.name == currentUsername && u.password == currentPassword);

    if (!finded_user) {
        warn('Senha ou usuário incorretos.');
        return;
    }

    const index = registered_users.indexOf(finded_user);

    if (newUsername) {
        registered_users[index].name = newUsername;

        localStorage.setItem('registered_users', JSON.stringify(registered_users));
        sucess('Alterações feitas.');
    }

    if (newEmail) {
        registered_users[index].email = newEmail;

        localStorage.setItem('registered_users', JSON.stringify(registered_users));
        sucess('Alterações feitas.');
    }

    if (!newPassword) {
        return;
    }

    if (newPassword != confirmPassword) {
        warn('Senhas diferentes.');
        return;
    }

    registered_users[index].password = newPassword;

    localStorage.setItem('registered_users', JSON.stringify(registered_users));
    sucess('Alterações feitas.');
}


function removeUser() {
    const registered_users = JSON.parse(localStorage.getItem('registered_users') ?? '[]');

    const currentUsername = document.getElementById('security-input-name').value;
    const currentPassword = document.getElementById('security-input-password').value;

    const finded_user = registered_users.find(u => u.name == currentUsername && u.password == currentPassword);

    if (!finded_user) {
        warn('Senha ou usuário incorretos.');
        return;
    }

    const index = registered_users.indexOf(finded_user);

    registered_users.splice(index, 1);
    
    localStorage.setItem('registered_users', JSON.stringify(registered_users));

    location.href = 'index.html';
}


function warn(msg) {
    warning.innerHTML = msg;
    warning.classList.remove('hidden');
}


function sucess(msg) {
    sucess_tag.innerHTML = msg;
    sucess_tag.classList.remove('hidden');
}
