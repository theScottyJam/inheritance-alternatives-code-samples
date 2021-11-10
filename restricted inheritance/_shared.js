export class MapReadOnlyBehavior {
  #getEntries
  constructor({ getEntries }) {
    this.#getEntries = getEntries
  }

  entries() {
    return this.#getEntries().map(([k, v]) => [k, v])
  }

  keys() {
    return this.#getEntries().map(([k, v]) => k)
  }

  values() {
    return this.#getEntries().map(([k, v]) => v)
  }

  has(key) {
    return findIndexFromEntries(this.#getEntries(), key) !== -1
  }

  get(key) {
    const index = findIndexFromEntries(this.#getEntries(), key)
    if (index === -1) return undefined

    const [k, v] = this.#getEntries()[index]
    return v
  }

  get size() {
    return this.#getEntries().length
  }

  forEach(callback) {
    for (const [key, value] of this.#getEntries()) {
      callback(key, value, this)
    }
  }
}

export const findIndexFromEntries = (entries, keyToFind) => (
  entries.findIndex(([k, v]) => Object.is(k, keyToFind))
)