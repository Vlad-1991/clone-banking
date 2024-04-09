import {GenericObject, useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, ComputedRef, Ref, watch} from "vue";
import {useUiStore} from "@/stores/UiStore";
import {useAuthStore} from "@/stores/AuthUserStore";
import {Router, useRouter} from 'vue-router'
import {login} from "@/services/api/auth";
import {showError} from "../../utils/showError";

interface LoginFormType {
    email: Ref<unknown>
    password: Ref<unknown>
    eError: Ref<string | undefined>
    pError: Ref<string | undefined>
    eBlur: Function
    pBlur: Function
    onSubmit: Function
    isSubmitting: Ref<boolean>
    isTooManyAttempts: ComputedRef<boolean>
}

const MIN_LENGTH: number = 6

export function useLoginForm(): LoginFormType {

    const UiStore= useUiStore()
    const AuthStore = useAuthStore()
    const router: Router = useRouter()
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

    const isTooManyAttempts: ComputedRef<boolean> = computed((): boolean => submitCount.value >= 3)

    watch(isTooManyAttempts, (val: boolean): void => {
        if (val) {
            setTimeout((): number => submitCount.value = 0, 1500)
        }
    })

    const onSubmit = handleSubmit(async (values: GenericObject): Promise<void> => {
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