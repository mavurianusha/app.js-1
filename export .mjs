export let myArray = ['camel', 265, true, '54.6']
export let blub = {watts: 10, type: 'LED'}
export function multiplyByFour(num) {
  return num * 4
}
import {myArray, blub, multiplyByFour} from './exportMultipleValues.mjs'
console.log(myArray)
console.log(blub)
console.log(multiplyByFour(2))
