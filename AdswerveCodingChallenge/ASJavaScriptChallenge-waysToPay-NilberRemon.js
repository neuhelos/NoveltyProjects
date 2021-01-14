// You are working for a fruit and vegetable vendor who has taken over her grandfather's
// business. She would like to help some of your customers to identify the best way to pay their
// bill. The first step is identifying how many different ways a customer can pay for a given bill
// without getting any change back. We need you to come up with a solution for the vendor's
// system to identify how many ways a bill can be paid using coin currency. Assume the only
// available payment method is with coins of $1, $2, or $5.

// Write a function that takes in a single integer (total bill) and returns an integer which indicates
// the amount of different ways a customer could pay for the bill. The order matters in this problem,
// so count each unique order as a unique way to pay (See example below).


//Input: 4
//Output: 5 Ways to Pay
// 1,1,1,1
// 2,2
// 2,1,1
// 1,2,1
// 1,1,2

//Input: 5
//Output: 9 Ways to Pay
//1,1,1,1,1
//2,1,1,1
//1,1,1,2
//1,1,2,1
//1,2,1,1
//1,2,2
//2,2,1
//2,1,2
//5

//Permutations vs Combinations (Order sensitivity)
//Need all possible permutations of coin denominations to sum to bill amount
//Need recursion - iterate through denominations subtracting from bill calling on function (similar to depth first search

const waysToPayRecursion = (bill, coinDenominations) => {
    
    const permuWays = (bill, payment) => {
        
        let result = []
        
        for (let denom of coinDenominations){
            let way
            denom === bill ? result.push(payment.concat([denom])) : denom < bill ? way = permuWays(bill-denom, payment.concat([denom])) : null
            if (way){ //not add undefined payments because denomination is greater than bill argument 
                result = result.concat(way)
            }
        }
        
        return result

    }

    let pay = permuWays(bill, payment = [])
    return {WaysToPay: pay.length, PaymentOptions: bill === 0 ? "None" : pay}

}

console.log(waysToPayRecursion(4, [1,2,5]))



const waysToPayIteration = (bill, coinDenominations) => {

    let result = new Array(bill + 1).fill(0)
    result[0] = 1

    for(let i = 1; i < bill + 1; i++) {
        for(let j = 0; j <= coinDenominations.length; j++)
            if(i - coinDenominations[j] >= 0){
                result[i] += result[i-coinDenominations[j]]
            
            }
    }

    return result[bill]

}

console.log(waysToPayIteration(5, [1,2,5]))



