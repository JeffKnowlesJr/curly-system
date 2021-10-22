import './styles/index.scss'

const curlySystem = {
  foo: 1,
  bar: 0
}

const spreadSystem = {
  ...curlySystem,
  next: 2
}

console.log(curlySystem)
console.log(spreadSystem)
