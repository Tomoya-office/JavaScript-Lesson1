//Q1
let name = '井草朋也';
let age = '24';
let text = `私のニックネームは${name}です。年齢は${age}歳です。`;

console.log(text);

//Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

console.log(`私の好きな言語は${languages[0]}次は${languages[3]}を勉強してみたいです`);

//Q3
let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
  };

  console.log(user.age);

//Q4
let playerList = [
    {
      name: 'John',
      age: 26,
      favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
      name: 'Bob',
      age: 33,
      favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
      name: 'Michael',
      age: 22,
      favorites: ['Football', 'Smash Bros.'],
    },
  ];

  console.log(playerList[1].favorites[1]);

//Q5　プレイヤーが増えてもいいようにコードを書き換えました。
let sum=0;

for(i=0; i < playerList.length; i++){
  sum += playerList[i].age;
}
console.log(sum / playerList.length);

//Q6
function sayHello() {
  console.log('Hellow');
}
sayHello();


const sayWorld = () => {
  console.log('Word');
};
sayWorld();


//Q7
user.birthday='2000-09-27'

user.sayHello = () => {
  console.log('Hello！');
}

user.sayHello();


//Q8
let calc = {};

//足し算
calc.add = (x,y) =>{
 console.log(x + y);
}
calc.add(5,2);

//引き算
calc.subtract = (x,y) =>{
  console.log(x - y);
}
calc.subtract(15,5);

//かけ算
calc.multiply = (x,y) =>{
  console.log(x * y);
}
calc.multiply(7,7);

//割り算
calc.divide = (x,y) =>{
  console.log(x / y);
}


/*
calc.add(x,y){
  total = x + y;
  console.log(total);
}

calc.subtract(x,y){
  total = x - y;
  console.log(total);
}

calc.multiply(x,y){
  total = x * y;
  console.log(total);
}

calc.divide(x,y){
  total = x / y;
  console.log(total);
}
*/

//Q9
function remainder(x,y) {
  let argument = x % y;
  return argument;
}

console.log('5を3で割った余りは' + remainder(5,3) + 'です。');

//Q10
//function foo() {
  //let x = 1;
//}
//スコープとは変数の有効範囲です。基本的に関数の中で宣言したものは関数内でしか利用することができません。
//この場合は、関数の中でこの1の数値を宣言してしまっていることに問題があり、関数の中で宣言したものは
//基本関数内でしか利用することができないため1の数値を参照し取り出せなくなっています。



//応用編 問題
//Q1
let random = Math.floor(Math.random()*10);
console.log(random);


//Q2
// 以下を追記

function functionData(callback) {
  setTimeout(() => {
    const data = "Hello World!";
    callback(data);
  }, 3000);
}

functionData(function displayData(data) {
  console.log(data);
});

//Q3
let num = 0;
if (num == 0) {
  console.log('num is 0');
}else if(num <= 0){
  console.log('num is less than 0');
}else if(num >= 0){
  console.log('num is greater than 0');
}

//Q4 なおし
let numbers = [];

numbers
for (let i = 0; i < 100; i++) {
  numbers[i] = i;
 }
  console.log(numbers);

//Q5
//偶数奇数の式
let mixed = [4, '2', 5, '8', '9', 0, 1];

for(let i = 0; i < mixed.length; i++){
  if(typeof mixed[i] === 'number' && mixed[i] % 2 === 0){
    console.log(mixed[i] + 'は偶数');
  }else if(typeof mixed[i] === 'number' && mixed[i] % 2 === 1){
    console.log(mixed[i] + 'は奇数');
  }else{
    console.log(mixed[i] + 'は文字列です。');
  }
}
