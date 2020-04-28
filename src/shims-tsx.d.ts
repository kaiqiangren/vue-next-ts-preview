import { VNode } from 'vue'

declare global {
  namespace JSX {
    interface Element extends VNode {}
  }
}
