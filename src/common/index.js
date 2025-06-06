import { useTitleStore } from '@/store'

export function initView() {
  const store = useTitleStore()
  return store.label
}