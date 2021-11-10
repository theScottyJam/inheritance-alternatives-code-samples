import MyMap from './MyMap.js'

export default class MyReadonlyMap {
  #map
  constructor(iterable) {
    this.#map = new MyMap(iterable)
  }

  toString() {
    return '[Object MyReadonlyMap]'
  }

  // Pass-through methods //

  entries() { return this.#map.entries() }

  keys() { return this.#map.keys() }

  values() { return this.#map.values() }

  has(key) { return this.#map.has(key) }

  get(key) { return this.#map.get(key) }

  get size() { return this.#map.size }

  forEach(callback) { this.#map.forEach(callback) }
}
