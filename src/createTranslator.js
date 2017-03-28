import render from "./render"
import getPluralType from "./getPluralType"

function resolve(path, obj) {
  return path.split('.').reduce(function(prev, curr) {
    return prev ? prev[curr] : undefined
  }, obj || self)
}

const createTranslator = (keys) => {
  const pluralType = getPluralType(keys.locale)
  return (componentName) => {
    if (!keys.hasOwnProperty(componentName)) {
      return (key) => `${componentName}.${key}`
    }
    const componentKeys = keys[componentName]
    return (key, params) => {
      let translation = componentKeys[key]

      if (key.indexOf('.') > -1 && translation === undefined) {
        translation = resolve(key, componentKeys)
      }

      if (translation === undefined || typeof translation === 'object') {
        return `[${componentName}.${key}]`
      }

      if(Array.isArray(translation)) {
        // plural
        if (params != null && typeof params.n === "number") {
          translation = translation[pluralType(params.n)]
        }
        else {
          return render(translation.join("\n"), params)
        }
      }
      return render(translation, params)
    }
  }
}

export default createTranslator
