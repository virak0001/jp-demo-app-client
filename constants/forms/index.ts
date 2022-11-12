import { ComputedRef } from '@nuxtjs/composition-api'
import { TranslateResult } from 'vue-i18n'

export type InputTypes = 'text' | 'password' | 'datetime'

type Keys<T> = Extract<keyof T, string | number>

export interface FormOptionItem<
  FormData extends Record<string, any> = Record<string, any>
> {
  field: Keys<FormData>
  type: InputTypes
  name: TranslateResult
  minDate?: ComputedRef<string>
  maxDate?: ComputedRef<string>
  placeholder?: string | false
  validation?: string
}

export type FormOptions<FormData extends Record<string, any>> =
  FormOptionItem<FormData>[]

export type InputGroupOptions = FormOptionItem<any> & { value: any }
