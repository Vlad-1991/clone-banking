const ERROR_CODES = {
    INVALID_LOGIN_CREDENTIALS: 'Неправильный логин и/или пароль',
    TOO_MANY_ATTEMPTS_TRY_LATER: 'Слишком много попыток входа, попытайтесь позже',
    auth: 'Пожалуйста войдите в систему'
}
export function error(code: any){
    let words = code.split(' ')
    code = words[0]
    // @ts-ignore
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}