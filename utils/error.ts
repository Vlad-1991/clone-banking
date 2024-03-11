const ERROR_CODES = {
    INVALID_LOGIN_CREDENTIALS: 'Неправильный логин и/или пароль',
    auth: 'Пожалуйста войдите в систему'
}
export function error(code: any){
    // @ts-ignore
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}