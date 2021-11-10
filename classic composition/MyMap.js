export default class MyMap {
  #entries = []
  constructor(iterable) {
    if (iterable === undefined) return;

    for (const [k, v] of iterable) {
      this.#entries.push([k, v])
    }
  }

  #indexOfKey(keyToFind) {
    return this.#entries.findIndex(([k, v]) => Object.is(k, keyToFind))
  }

  entries() {
    return this.#entries.map(([k, v]) => [k, v])
  }

  keys() {
    return this.#entries.map(([k, v]) => k)
  }

  values() {
    return this.#entries.map(([k, v]) => v)
  }

  has(key) {
    return this.#indexOfKey(key) !== -1
  }

  get(key) {
    const index = this.#indexOfKey(key)
    if (index === -1) return undefined

    const [k, v] = this.#entries[index]
    return v
  }

  get size() {
    return this.#entries.length
  }

  forEach(callback) {
    for (const [key, value] of this.#entries) {
      callback(key, value, this)
    }
  }

  set(key, value) {
    const index = this.#indexOfKey(key)
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
    const index = this.#indexOfKey(key)
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
