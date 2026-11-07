export interface Todo {
  id: number
  text: string
  done: boolean
}

export type Filter = 'all' | 'open' | 'done'

const STORAGE_KEY = 'claude-playground-todos'

function load(): Todo[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Todo[]) : []
  } catch {
    return []
  }
}

export function useTodos() {
  const todos = useState<Todo[]>('todos', () => [])
  const filter = useState<Filter>('todo-filter', () => 'all')

  onMounted(() => {
    todos.value = load()
  })

  watch(
    todos,
    (value) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
      } catch {
        /* Speicher nicht verfügbar – ignorieren */
      }
    },
    { deep: true }
  )

  const visible = computed(() => {
    if (filter.value === 'open') return todos.value.filter((t) => !t.done)
    if (filter.value === 'done') return todos.value.filter((t) => t.done)
    return todos.value
  })

  const openCount = computed(() => todos.value.filter((t) => !t.done).length)

  function add(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return
    todos.value.push({ id: Date.now(), text: trimmed, done: false })
  }

  function toggle(id: number) {
    const todo = todos.value.find((t) => t.id === id)
    if (todo) todo.done = !todo.done
  }

  function remove(id: number) {
    todos.value = todos.value.filter((t) => t.id !== id)
  }

  function clearDone() {
    todos.value = todos.value.filter((t) => !t.done)
  }

  return { todos, filter, visible, openCount, add, toggle, remove, clearDone }
}
