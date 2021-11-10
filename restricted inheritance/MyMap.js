import { MapReadOnlyBehavior, findIndexFromEntries } from './_shared.js'

export default class MyMap extends MapReadOnlyBehavior {
  #entries = []
  constructor(iterable) {
    super({
      getEntries: () => this.#entries,
    })
    if (iterable === undefined) return;

    for (const [k, v] of iterable) {
      this.#entries.push([k, v])
    }
  }

  set(key, value) {
    const index = findIndexFromEntries(this.#entries, key)
    if (index !== -1) {
      this.#entries[index] = [key, value]
    } else {
      this.#entries.push([key, value])
    }
  }

  clear() {
    this.#entries = []
  }

  delete(key) {
    const index = findIndexFromEntries(this.#entries, key)
    const found = index !== -1

    if (found) {
      this.#entries.splice(index, 1)
    }
    return found
  }

  toString() {
    return '[Object MyMap]'
  }
}
