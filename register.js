(function() {
    const reg_url = new URL(location.href);
    const reg_urlParams = reg_url.searchParams;

    if (reg_urlParams.get('reg') == 'true') {

        // Verificar se o nome é maior ou igual a 3 dígitos.

        const reg_username = reg_urlParams.get('reg-username');

        if ((reg_username ?? '').length < 3) {
            return voltarParaRegister('Usuário inválido.');
        }

        // Verificar se o email termina com gmail.com ou outlook.com.

        const reg_email = reg_urlParams.get('reg-email');
        const reg_email_host = (reg_email ?? '@').split('@')[1];

        if (reg_email_host != 'gmail.com' && reg_email_host != 'outlook.com') {
            return voltarParaRegister('Email inválido.');
        }

        // Verificar se a senha é maior ou igual a 8 dígitos.

        const reg_password = reg_urlParams.get('reg-password');

        if ((reg_password ?? '').length < 8) {
            return voltarParaRegister('Senha pequena.');
        }

        // Verificar confirmação de senha.

        const reg_confirm_password = reg_urlParams.get('reg-confirm-password');

        if (reg_password != reg_confirm_password) {
            return voltarParaRegister('Senhas diferentes.');
        }

        // Cadastrar

        // registered_users : [{}, {user}, ...]
        // user { nome, email, senha }

        const registered_users = JSON.parse(localStorage.getItem('registered_users') ?? '[]');

        const finded = registered_users.find(user => user.name == reg_username || user.email == reg_email);

        if (finded != undefined) {
            return voltarParaRegister('Usuário já cadastrado.');
        }

        registered_users.push({
            name: reg_username,
            email: reg_email,
            password: reg_password
        });

        localStorage.setItem('registered_users', JSON.stringify(registered_users));

    }
})();

function voltarParaRegister(msg) {
    location.href = 'register.html?msg=' + msg.replaceAll(' ', '+');
}
