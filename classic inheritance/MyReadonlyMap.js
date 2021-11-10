export default class MyReadonlyMap {
  _protected = {
    entries: [],
    indexOfKey: keyToFind => {
      return this._protected.entries.findIndex(([k, v]) => Object.is(k, keyToFind))
    }
  }

  constructor(iterable) {
    if (iterable === undefined) return;

    for (const [k, v] of iterable) {
      this._protected.entries.push([k, v])
    }
  }

  entries() {
    return this._protected.entries.map(([k, v]) => [k, v])
  }

  keys() {
    return this._protected.entries.map(([k, v]) => k)
  }

  values() {
    return this._protected.entries.map(([k, v]) => v)
  }

  has(key) {
    return this._protected.indexOfKey(key) !== -1
  }

  get(key) {
    const index = this._protected.indexOfKey(key)
    if (index === -1) return undefined

    const [k, v] = this._protected.entries[index]
    return v
  }

  get size() {
    return this._protected.entries.length
  }

  forEach(callback) {
    for (const [key, value] of this._protected.entries) {
      callback(key, value, this)
    }
  }

  toString() {
    return '[Object MyReadonlyMap]'
  }
}
