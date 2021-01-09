//PackageFruits

// You are working for a fruit and vegetable vendor who has taken over her grandfather's
// business. The vendor's system is only capable of tracking three items at a time. Her grandfather
// limited orders to three items. She would like to allow for orders of any size. Because the
// vendor's system is only able to capture three items at a time, we need you to come up with a
// solution for the vendor's system to repackage orders of any size into lists of a maximum of three
// items.

// Write a function that takes in a single list of fruits and vegetables and returns list(s) with a
// maximum of three items. The resulting lists must preserve the order of the fruits and vegetables
// in the original list.


//Input - List of Produce Items
//Output - 2-D Matrix of Lists of Produce Items

//Max List/Array Length of 3 per Matrix Element



const packageFruits = (order) => {

    let index = 0

    let newOrder = order.reduce( (result, produce) => {
        
        result[index] ? result[index].push(produce) : result[index] = [produce]
        if(result[index].length === 3) index++
        return result

    }, [] )

    return newOrder

}

console.log(packageFruits(["starfruit", "tamarind", "mango", "guava", "coconut", "mora", "guanábana"]))