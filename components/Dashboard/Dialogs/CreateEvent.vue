<template>
  <CommonDialog @close="emit('close')">
    <template #body>
      <CommonForm
        :form-data="formData"
        :form-options="formOptions"
        @submit="submit"
      >
        <template #buttons>
          <CommonButton>{{ $t('common.create') }}</CommonButton>
        </template>
      </CommonForm>
    </template>
  </CommonDialog>
</template>

<script setup lang="ts">
import { useAPI } from '~/composables'
import { FormOptions } from '~/constants/forms'
import { minutes } from '~/constants/forms/datetime'
const { $dayjs } = useContext()

const emit = defineEmits(['close', 'created'])

const eventsEndpoint = useAPI('events')

const firstPossibleStart = computed(() => {
  let date = $dayjs().set('second', 0)
  const currentMinutes = date.format('mm')
  const displayMinutes = minutes.find((slot) => slot >= currentMinutes) || '00'
  date = date.set('minute', Number(displayMinutes))
  if (displayMinutes === '00') return date.add(1, 'hour')
  return date
})

const formData = reactive({
  name: '',
  startAt: firstPossibleStart.value.toISOString(),
  endAt: firstPossibleStart.value.add(1, 'hour').toISOString(),
})

const formOptions = ref<FormOptions<typeof formData>>([
  {
    field: 'name',
    type: 'text',
    name: 'attributes.name',
    validation: 'required|min:6|max:255',
  },
  {
    field: 'startAt',
    type: 'datetime',
    name: 'attributes.startAt',
    validation: 'required',
  },
  {
    field: 'endAt',
    type: 'datetime',
    maxDate: computed(() =>
      $dayjs(formData.startAt).add(2, 'hour').toISOString()
    ),
    name: 'attributes.endAt',
    validation: 'after:startAt',
  },
])

async function submit(payload: typeof formData) {
  try {
    const { data } = await eventsEndpoint.post(payload)
    emit('created', data)
    emit('close')
  } catch {}
}
</script>
