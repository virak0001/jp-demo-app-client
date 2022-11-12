<template>
  <div class="w-full h-full">
    <DashboardActionBar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { useI18n } from '~/composables'
export default defineComponent({
  middleware: ['auth-user'],
  setup() {
    const { $t } = useI18n()
    useMeta({
      title: $t('app.title') as string,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Demo',
        },
      ],
    })
  },
  head: {},
})
</script>
