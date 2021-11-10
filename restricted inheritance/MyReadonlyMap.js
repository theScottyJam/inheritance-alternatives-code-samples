import { MapReadOnlyBehavior } from './_shared.js'

export default class MyReadonlyMap extends MapReadOnlyBehavior {
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

  toString() {
    return '[Object MyReadonlyMap]'
  }
}
