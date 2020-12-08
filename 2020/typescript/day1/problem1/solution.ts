import { readFileSync } from 'fs'

const file = readFileSync('./inputday1.txt', 'utf-8')

const numMap: Map<string, number> = new Map()
file.split('\n').forEach((num: string) => {
    numMap.set(num, parseInt(num))
})

for (let otherValue of numMap.values()) {
    const desiredNum = 2020 - otherValue
    if (numMap.get(desiredNum.toString())) {
        console.log(otherValue * desiredNum)
        break
    }
}
