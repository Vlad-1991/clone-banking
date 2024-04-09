interface ErrorCodesType {
    [key: string]: string
}

const ERROR_CODES: ErrorCodesType = {
    INVALID_LOGIN_CREDENTIALS: 'Неправильный логин и/или пароль',
    TOO_MANY_ATTEMPTS_TRY_LATER: 'Слишком много попыток входа, попытайтесь позже',
    auth: 'Пожалуйста войдите в систему'
}
export function error(code: string): string{
    let words: string[] = code.split(' ')
    code = words[0]
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}