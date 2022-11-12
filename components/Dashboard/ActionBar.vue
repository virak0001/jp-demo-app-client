<template>
  <div
    class="w-full flex justify-end items-center gap-2 sm:gap-10 bg-white border-b-2 border-black p-4"
  >
    <h1 class="mr-auto">Demo app</h1>
    <p
      v-if="!loggedIn"
      class="cursor-pointer"
      @click="emit('action', { type: 'login' })"
    >
      {{ $t('dashboard.auth.login') }}
    </p>
    <p
      v-if="!loggedIn"
      class="cursor-pointer"
      @click="emit('action', { type: 'register' })"
    >
      {{ $t('dashboard.auth.register') }}
    </p>
    <p v-if="loggedIn">
      {{ $t('dashboard.auth.loggedIn') + name }}
    </p>
    <p v-if="loggedIn" class="cursor-pointer" @click="$auth.logout()">
      {{ $t('dashboard.auth.logout') }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useLoggedInRef } from '~/composables/utils'
const emit = defineEmits(['action'])

const { $auth } = useContext()
const { loggedIn } = useLoggedInRef()

const name = computed(() => $auth.user?.name)
</script>
