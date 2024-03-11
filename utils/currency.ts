const formatter = new Intl.NumberFormat('ru-Ru', {currency: 'RUB', style: 'currency'})

export function currency(value: number | bigint): string{
    return formatter.format(value)
}