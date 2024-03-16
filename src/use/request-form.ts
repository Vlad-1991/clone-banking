import {useField, useForm} from "vee-validate";
import * as yup from 'yup'

export function useRequestForm(fn: any){
    const {isSubmitting, handleSubmit} = useForm({
        initialValues: {
            status: 'active'
        }
    })
    const {value: fio, errorMessage: fError, handleBlur: fBlur} = useField(
        'fio',
        yup.string()
            .trim()
            .min(3, 'ФИО не может быть меньше 3 символов')
            .required('Введите ФИО клиента ')
    )
    const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField(
        'phone',
        yup.string()
            .trim()
            .required('Телефон не може быть пустым')
    )
    const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField(
        'amount',
        yup.number()
            .required('Введите сумму')
            .min(0, 'Сумма не може быть меньше 0')
    )
    const {value: status} = useField('status')

    const onSubmit = handleSubmit(fn)

    return {
        status,
        isSubmitting,
        onSubmit,
        fio,
        phone,
        amount,
        fError,
        fBlur,
        pError,
        pBlur,
        aError,
        aBlur
    }
}