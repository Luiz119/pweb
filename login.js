(function() {

    const in_url = new URL(location.href);
    const in_urlParams = in_url.searchParams;

    if (in_urlParams.get('reg') != 'true') {

        // Obter lista de usuários.

        const in_registered_users = JSON.parse(localStorage.getItem('registered_users') ?? '[]');

        // Verificar se o usuário existe.

        const finded = in_registered_users.find(user => user.name == in_urlParams.get('username'));

        if (finded == undefined) {
            return voltarParaLogin('Usuário inexistente.');
        }

        // Verificar se a senha está correta.

        if (in_urlParams.get('password') != finded.password) {
            return voltarParaLogin('Senha incorreta.');
        }


        function voltarParaLogin(msg) {
            location.href = 'login.html?msg=' + msg.replaceAll(' ', '+');
        }

    }

})();


