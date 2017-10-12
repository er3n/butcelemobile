const people = [
    {name: 'Nader', age: 36},
    {name: 'Amanda', age: 24},
    {name: 'Jason', age: 44}
]


const transaction = [
    {description: "Alışveriş", amount: 500.00, sign: -1}
]

export default () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(people)
        }, 3000)
    })
}

export function getTransactions(start, size) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let transactions = [];

            for (let i = 0; i < size; i++) {
                transactions.push({
                    id: i + start,
                    description: `Alışveriş ${i + start}`,
                    amount: 500 + i,
                    sign: +1

                });
            }

            return resolve(transactions)
        }, 3000)
    })

}