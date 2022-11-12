<template>
  <div class="w-96 mx-auto shadow-lg p-5">
    <div>
      <h1 class="text-xl font-semibold text-center">
        {{ $t('dashboard.auth.registerDialogTitle') }}
      </h1>

      <CommonForm
        :form-data="formData"
        :form-options="formOptions"
        @submit="submit"
      >
        <template #buttons>
          <CommonButton type="submit">{{
            $t('dashboard.auth.register')
          }}</CommonButton>
        </template>
      </CommonForm>
      <p class="mt-8 text-xs font-light text-center text-gray-700">
        {{ $t('dashboard.auth.switchTo') }}
        <NuxtLink
          to="sign-in"
          class="font-medium hover:underline cursor-pointer"
          >{{ $t('dashboard.auth.login') }}</NuxtLink
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { useAPI } from '~/composables'
import { FormOptions } from '~/constants/forms'
export default defineComponent({
  layout: 'auth',
  setup() {
    const authEndpoint = useAPI('auth')
    const formData = reactive({
      name: '',
      password: '',
      email: '',
      c_password: '',
    })
    const formOptions = ref<FormOptions<typeof formData>>([
      {
        field: 'name',
        type: 'text',
        name: 'attributes.name',
        validation: 'required|min:6|max:36',
      },
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
      {
        field: 'c_password',
        type: 'password',
        name: 'attributes.c_password',
        validation: 'required|same:password|min:8',
      },
    ])
    const submit = async (data: typeof formData) => {
      try {
        await authEndpoint.post(data, 'register')
        const path = window.$nuxt.localePath({
          name: '/auth/sign-in',
        })
        return window.$nuxt.$router.push(path)
      } catch (error: any) {
        console.warn(error)
      }
    }
    return {
      formData,
      formOptions,
      submit,
    }
  },
})
</script>
