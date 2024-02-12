/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const calculateTotal={};

  transactions.forEach(element => {

    const {category, price} = element;

    if(calculateTotal.hasOwnProperty(category)){
       calculateTotal[category] += price ;
    }else{
      calculateTotal[category] = price ;
    }
  });
  const result = Object.entries(calculateTotal).map(([category, totalSpent]) => {return {category,totalSpent}});
  console.log("result ====", result)
  return result;
}

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656076800000,
    price: 20,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 15,
    category: 'Food',
    itemName: 'Burger',
  },
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);

module.exports = calculateTotalSpentByCategory;
