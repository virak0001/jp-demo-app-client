<template>
  <div class="w-96 mx-auto shadow-lg p-5">
    <h1 class="text-xl font-semibold text-center">
      {{ $t('dashboard.auth.loginDialogTitle') }}
    </h1>
    <CommonForm
      :form-data="formData"
      :form-options="formOptions"
      @submit="submit"
    >
      <template #buttons>
        <CommonButton type="submit" variant="primary">{{
          $t('dashboard.auth.login')
        }}</CommonButton>
      </template>
    </CommonForm>
    <p v-if="hasError" class="text-red-500 text-center">
      {{ $t('dashboard.auth.failedLoginAttempt') }}
    </p>
    <p class="mt-8 text-xs font-light text-center text-gray-700">
      {{ $t('dashboard.auth.switchTo') }}
      <NuxtLink
        to="sign-up"
        class="font-medium hover:underline cursor-pointer"
        >{{ $t('dashboard.auth.register') }}</NuxtLink
      >
    </p>
  </div>
</template>

<script lang="ts">
import { FormOptions } from '~/constants/forms'
export default defineComponent({
  layout: 'auth',
  setup() {
    const hasError = ref(false)
    const formData = reactive({
      email: '',
      password: '',
    })
    const formOptions = ref<FormOptions<typeof formData>>([
      {
        field: 'email',
        type: 'text',
        name: 'attributes.email',
        validation: 'required|min:6|email',
      },
      {
        field: 'password',
        type: 'password',
        name: 'attributes.password',
        validation: 'required|min:8|max:255',
      },
    ])
    const submit = async (data: typeof formData) => {
      try {
        await window.$nuxt.$auth.loginWith('default', { data })
        const path = window.$nuxt.localePath({
          name: '/',
        })
        return window.$nuxt.$router.push(path)
      } catch {
        hasError.value = true
      }
    }
    return {
      formData,
      hasError,
      formOptions,
      submit,
    }
  },
})
</script>
