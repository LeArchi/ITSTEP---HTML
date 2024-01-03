const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function (allLogins, login) {
    return !allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
    if (!isLoginValid(login)) {
        return 'Error! Login must be between 4 and 16 characters';
    }

    if (!isLoginUnique(allLogins, login)) {
        return 'This login is already in use!';
    }

    allLogins.push(login);
    return 'Login added successfully!';
};

console.log(addLogin(logins, 'Ajax')); // 'Login added successfully!'
console.log(addLogin(logins, 'robotGoogles')); // 'This login is already in use!'
console.log(addLogin(logins, 'Zod')); // 'Error! Login must be between 4 and 16 characters'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Error! Login must be between 4 and 16 characters'