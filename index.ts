// Bài 1
function sumArray(numbers: number[]) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sumArray([2, 3, 5, 3, 9, 10]));

// Bài 2
interface Person {
  name: string;
  age: number;
  email: string;
}

function printPersonInfo(person: Person) {
  return `Name: ${person.name}, Age: ${person.age}, Email: ${person.email}`;
}

console.log(
  printPersonInfo({ name: "John Doe", age: 32, email: "johndoe@example.com" })
);

// Bài 3
function getFirstElement<T>(array: T[]): T | null {
  return array.length > 0 ? array[0] : null;
}

console.log(getFirstElement([2, 3, 5, 3, 9, 10]));

// Bài 4
const Color = Object.freeze({
  RED: "RED",
  GREEN: "GREEN",
  BLUE: "BLUE",
});

function printColorName(color: string) {
  console.log(color);
}

printColorName(Color.RED);

// Bài 5
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

let rectangle = new Rectangle(5, 6);

console.log(rectangle.calculateArea());

//Bài 6
const isWorking = () => {
  return () => {
    console.log("Work !!!!!!!");
  };
};
class LogNumber {
  number: number;
  constructor(number: number) {
    this.number = number;
  }
  @isWorking()
  logNumber() {
    return `Number ${this.number}`;
  }
}

console.log(new LogNumber(3).logNumber());

// Bài 7:
interface Data {
  name: string;
  age: string;
}
const getData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();

// Bài 8
function factorial(n: number): number {
  if (n < 0) {
    throw new Error("Giai thừa không được xác định cho số âm");
  }
  return n ? n * factorial(n - 1) : 1;
}

function isPrime(n: number): boolean {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(factorial(5));
console.log(isPrime(7));

// Bài 9
type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

// Tạo danh sách sản phẩm
let productsList: Product[] = [
  { id: 1, name: "Sản phẩm 1", price: 120, quantity: 10 },
  { id: 2, name: "Sản phẩm 2", price: 80, quantity: 5 },
  { id: 3, name: "Sản phẩm 3", price: 150, quantity: 2 },
  { id: 4, name: "Sản phẩm 4", price: 60, quantity: 7 },
  { id: 5, name: "Sản phẩm 5", price: 200, quantity: 1 },
];

// Tính tổng giá trị của tất cả sản phẩm trong danh sách
let totalValue = productsList.reduce(
  (total, product) => total + product.price * product.quantity,
  0
);

// Lọc ra các sản phẩm có giá lớn hơn 100
let expensiveProducts = productsList.filter((product) => product.price > 100);

// Tạo một mảng mới chứa các đoạn mô tả
let productDescriptions = productsList.map(
  (product) =>
    `Sản phẩm ${product.name} có giá ${product.price} đồng và còn ${product.quantity} sản phẩm.`
);

// Tính tổng số lượng của tất cả các sản phẩm có giá dưới 100
let totalQuantityCheapProducts = productsList.reduce(
  (total, product) => (product.price < 100 ? total + product.quantity : total),
  0
);

// Tạo một hàm getDiscountedProducts
function getDiscountedProducts(
  products: Product[],
  discountRate: number
): Product[] {
  return products.map((product) => ({
    ...product,
    price: product.price * (1 - discountRate),
  }));
}
