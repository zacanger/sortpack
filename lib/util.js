const sort = (object) => {
  if (Array.isArray(object)) {
    return [...object].sort()
  } else {
    return Object.keys(object)
      .sort()
      .reduce((p, c) => {
        p[c] = object[c]
        return p
      }, {})
  }
}
