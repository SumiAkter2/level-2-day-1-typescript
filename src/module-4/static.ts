class Counter{
  static  counter: number=0;
    
  static  increment():number {
        return (Counter.counter = Counter.counter + 1);
    }
  static  decrement(): number{
        return (Counter.counter = Counter.counter - 1);
    }
}
// const increment1=new Counter()       // 0-1
// const increment2 = new Counter()        // 1-2
console.log(Counter.increment());
console.log(Counter.increment());