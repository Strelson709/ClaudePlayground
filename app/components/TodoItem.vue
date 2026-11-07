<script setup lang="ts">
import type { Todo } from '~/composables/useTodos'

defineProps<{ todo: Todo }>()
defineEmits<{ toggle: []; remove: [] }>()
</script>

<template>
  <li class="item" :class="{ done: todo.done }">
    <label>
      <input type="checkbox" :checked="todo.done" @change="$emit('toggle')" />
      <span>{{ todo.text }}</span>
    </label>
    <button class="remove" aria-label="Löschen" @click="$emit('remove')">✕</button>
  </li>
</template>
