const keys = require('../keys')

module.exports = function (email) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Аккаунт создан',
        html: `
            <h1>Добро пожаловать</h1>
            <p>Вы успешно создали аккаунт с email - ${email}</p>
            <hr/>
            <p>Наш сайт <a href="${keys.BASE_URL}">www.inspector.lviv</a></p>
        `
    }
}