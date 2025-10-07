export const GLOBAL_VAR = {
    SIDEBAR_TOGGLE: "isSidebarToggle",
    UNLOCK_ACCOUNT: "unlock-account",
    AUTO_LOGIN: "auto-login",
    PASSWORD_RESET: "reset-password",
    USER_TYPE_PUBLIC: 2,
    USER_TYPE_SYSTEM: 1,
    USER_TYPE_MIXED: 3,
    TARGET_TYPE_POST: 1,
    TARGET_TYPE_COMMENT: 2,
    TARGET_TYPE_RESPONSE: 2,
    BLOCKED_ACCOUNT: (token1, token2, username) =>
        `<div style="width: full; margin: 20px 9%; padding: 20px 5%; border-radius: 8px; box-shadow: 0 0 .3rem .3rem rgba(0,0,0,0.06); background: white;">

    <h2>Prezado(a) <strong style="color: #29e;">${username}</strong>,</h2>

    <p>Identificamos cinco tentativas de login sem sucesso em sua conta, e, por medidas de segurança, ela foi temporariamente bloqueada:</p>
    <p>Para recuperar o acesso, você pode:</p>
    <ol>
        <li>Redefinir sua senha: <a href="http://localhost:3000/account?token=${token1}"    style="text-decoration: none;">Clique aqui para redefinir</a>.</li>
        <li>Acessar diretamente: <a href="http://localhost:3000/account?token=${token2}" style="text-decoration: none;">Clique aqui para entrar automaticamente</a>.</li>
    </ol>
    <p>Se você não reconhece essas tentativas de login, recomendamos redefinir sua senha imediatamente.
    Caso precise de ajuda adicional, nossa equipe de suporte está disponível.</p>
    <p>Atenciosamente,</p>
    <p><span style="font-weight: 900; color: rgb(49, 141, 49);">CSIRT</span> da Academia</p>
    <p>Contato Suporte</p>

</div>`,


}

export const AUTH_TYPE = {
    LOGIN : "login",
}

