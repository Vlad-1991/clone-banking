import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";
import {useUiStore} from "@/stores/UiStore";
import {useAuthStore} from "@/stores/AuthUserStore";
import {useRouter} from 'vue-router'
import {login} from "@/services/api/auth";
import {showError} from "../../utils/showError";

const MIN_LENGTH = 6

export function useLoginForm() {

    const UiStore = useUiStore()
    const AuthStore = useAuthStore()
    const router = useRouter()
    const {handleSubmit, isSubmitting, submitCount} = useForm()

    const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
        'email',
        yup.string().trim().required('Пожалуйста введите email').email('Необходимо ввести корректный email')
    )


    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
        'password',
        yup.string().trim().required('Пожалуйста введите пароль')
            .min(MIN_LENGTH, `Пароль не может быть меньше ${MIN_LENGTH} символов`)
    )

    const isTooManyAttempts = computed(() => submitCount.value >= 3)

    watch(isTooManyAttempts, val => {
        if (val) {
            setTimeout(() => submitCount.value = 0, 1500)
        }
    })

    const onSubmit = handleSubmit(async values => {
            try {
                let data = await login(values)
                AuthStore.setToken(data.idToken)
                UiStore.clearMessage()
                await router.push('/')
            } catch (e: any) {
                await showError(e.response.data.error)
            }
        }
    )

    return {
        email,
        password,
        eError,
        pError,
        eBlur,
        pBlur,
        onSubmit,
        isSubmitting,
        isTooManyAttempts
    }
}