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

//Q5　プレイヤーが増えてもいいようにコードを書き換える。
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / playerList.length);

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


//Q8 メソッドをカラムオブジェクトに追加して実行する。
let calc = {};

//足し算
calc.add = 5 + 2;
console.log(calc.add);

//引き算
calc.subtract = 15 - 5;
console.log(calc.subtract);

//かけ算
calc.multiply = 7 * 7;
console.log(calc.multiply);

//割り算
calc.divide = 25 / 5;
console.log(calc.divide);

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

//Q9 解けたが5を3での値をXYにすることは可能か？
function remainder(x,y) {
  let argument = x % y;
  return argument;
}

console.log('5を3で割った余りは' + remainder(5,3) + 'です。');


//Q10
//function foo() {
  //let x = 1;
//}
//console.log(x);
//変数の定義を関数の外でする必要がある。
//関数の外で定義した変数は関数の中からでも参照することができるため、
//この外側で定義した変数こそがグローバル変数になる。



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
let num = '0';
if (num == 0) {
  console.log('num is 0');
}else if(num <= 0){
  console.log('num is less than 0');
}else if(num >= 0){
  console.log('num is greater than 0');
}

//Q4
for (let numbers = 0; numbers < 100; numbers++) {
  console.log(numbers);
}

//Q5
//偶数奇数の式
let mixed = [4, '2', 5, '8', '9', 0, 1];
for(let i=0; i < mixed.length; i++){
  if(typeof mixed[i] === 'number' && mixed[i]%2===0){
    console.log(mixed[i]+'は偶数');
  }else if(typeof mixed[i] === 'number' && mixed[i]%2===1){
    console.log(mixed[i]+'は奇数');
  }else if(mixed[i] === '2'||'8'||'9'){
    console.log(mixed[i]+'は文字列です。');
  }
}