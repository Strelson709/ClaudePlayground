<script setup lang="ts">
import type { Filter } from '~/composables/useTodos'

const { todos, filter, visible, openCount, add, toggle, remove, clearDone } = useTodos()
const newTodo = ref('')

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Alle' },
  { value: 'open', label: 'Offen' },
  { value: 'done', label: 'Erledigt' }
]

function submit() {
  add(newTodo.value)
  newTodo.value = ''
}
</script>

<template>
  <main class="card">
    <h1>Todo-Liste</h1>

    <form class="new" @submit.prevent="submit">
      <input v-model="newTodo" placeholder="Was ist zu tun?" autofocus />
      <button type="submit" :disabled="!newTodo.trim()">Hinzufügen</button>
    </form>

    <nav class="filters">
      <button
        v-for="f in filters"
        :key="f.value"
        :class="{ active: filter === f.value }"
        @click="filter = f.value"
      >
        {{ f.label }}
      </button>
    </nav>

    <ul v-if="visible.length" class="list">
      <TodoItem
        v-for="todo in visible"
        :key="todo.id"
        :todo="todo"
        @toggle="toggle(todo.id)"
        @remove="remove(todo.id)"
      />
    </ul>
    <p v-else class="empty">Keine Aufgaben.</p>

    <footer v-if="todos.length" class="footer">
      <span>{{ openCount }} offen</span>
      <button v-if="todos.length > openCount" class="link" @click="clearDone">
        Erledigte löschen
      </button>
    </footer>
  </main>
</template>
