import MyReadonlyMap from './MyReadonlyMap.js'

export default class MyMap extends MyReadonlyMap {
  set(key, value) {
    const index = this._protected.indexOfKey(key)
    if (index !== -1) {
      this._protected.entries[index] = [key, value]
    } else {
      this._protected.entries.push([key, value])
    }
  }

  clear() {
    this._protected.entries = []
  }

  delete(key) {
    const index = this._protected.indexOfKey(key)
    const found = index !== -1

    if (found) {
      this._protected.entries.splice(index, 1)
    }
    return found
  }

  toString() {
    return '[Object MyMap]'
  }
}
