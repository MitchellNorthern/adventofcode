import { readFileSync } from 'fs'

const file = readFileSync('./inputday1problem2.txt', 'utf-8')

const numMap: Map<string, number> = new Map()
file.split('\n').forEach((num: string) => {
    numMap.set(num, parseInt(num))
})

for (let value of numMap.values()) {
    const desiredNum = 2020 - value
    const newMap: Map<string, number> = new Map(numMap)
    newMap.delete(value.toString())
    for (let otherValue of newMap.values()) {
        const newDesiredNum = desiredNum - otherValue
        if (newDesiredNum > 0 && newMap.get(newDesiredNum.toString())) {
            console.log(value * otherValue * newDesiredNum)
            process.exit(0)
        }
    }
}
