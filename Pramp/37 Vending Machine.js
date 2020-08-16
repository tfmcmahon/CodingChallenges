//OOP project

//created a vending machine class which stocked beverages (another class)
//it accepted money and dispensed change
class Beverage {
  constructor(name, stock, price) {
    this.name = name
    this.price = price
    this.stock = stock
  }

  hasStock() {
    return this.stock > 0
  }

  decrementStock() {
    this.stock -= 1
  }
}

class VendingMachine {
  constructor(stock) {
    this.drinks = stock
  }

  purchase(money, product) {
    let carryProduct = this.drinks.has(product)
    let inStock = product.hasStock

    if (inStock && money > product.price) {
      //decrement the stock
      product.decrementStock()

      //vend the object
      this.vendProduct()

      //25, 10, 5, 1
      let change = money - product.price
      this.dispenseChange(change)
    } else if (inStock) {
      return console.log('Insufficient funds'), this.dispenseChange(money)
    } else {
      return console.log('Product not available'), this.dispenseChange(money)
    }
  }

  vendProduct() {
    return 'See you in hell'
    //dispenses the product
  }

  dispenseChange(change) {
    console.log(change)
    let changeObject = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    }

    while (change >= 25) {
      change -= 25
      changeObject.quarters++
    }

    while (change >= 10) {
      change -= 10
      changeObject.dimes++
    }

    while (change >= 5) {
      change -= 5
      changeObject.nickels++
    }

    while (change >= 1) {
      change -= 1
      changeObject.pennies++
    }

    console.log(changeObject)
    return changeObject
  }
}

const Pepsi = new Beverage('pepsi', 10, 600)
//...all of our drinks

const stock = new Set()

stock.add(Pepsi)

const OurVendingMachine = new VendingMachine(stock)

console.log(OurVendingMachine.purchase(888, Coke))

/*

Name of peer: Tamas
CS background: 

What can I improve?: 
What did my peer think I can improve?: Ask more clarifying questions earlier; anticipate more issues. We didn't anticipate how money is inserted into the machine.
We also could have created a better change object and make change function that could accept different denominations down the road.

What did I do well?: Successfully create two classes that interacted with eachother.
What did peer think I did well?: Wrote usable code within the time limit

*/
