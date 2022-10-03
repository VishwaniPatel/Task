import { Component, OnInit } from '@angular/core';
import { of, first,map, fromEvent, interval, take, from, merge , concat, forkJoin, timer,filter, takeUntil, debounceTime, switchMap} from 'rxjs';    



@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
public value: any;
  constructor() {
    this.value= '';
   }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void{
    of(1, 2, 3)
    .pipe(map((x) => x * x))
    .subscribe((v) => {
      console.log(`value: ${v}`)
    }
    
    
    );


    of(10 , 'a')
  .subscribe({
    next: value => console.log('next:', value),
    error: err => console.log('error:', err),
    complete: () => console.log('the end'),
  });


  const clicks = fromEvent(document, 'click');
clicks.subscribe(x => console.log(x));


// const numbers = interval(1000);
// const takeFourNumbers = numbers.pipe(take(4));
// takeFourNumbers.subscribe(x => console.log('Next: ', x));


const array = [10, 20, 30];
const result = from(array);
result.subscribe(x => console.log(x));


// const click = fromEvent(document, 'click');
// const timer = interval(1000);
// const generateinterval = timer.pipe(take(4));
// const clicksOrTimer = merge(click, generateinterval);
// clicksOrTimer.subscribe(x => console.log(x));
 

// const timer1 = interval(1000).pipe(take(10));
// const timer2 = interval(1000).pipe(take(6));
// const timer3 = interval(500).pipe(take(10));
 
// const concurrent = 2; // the argument
// const merged = merge(timer1, timer2, timer3, concurrent);
// merged.subscribe(x => console.log(x));


// concat(
//   of(1, 2, 3),
//   // subscribed after first completes
//   of(4, 5, 6),
//   // subscribed after second completes
//   of(7, 8, 9)
// ).subscribe(console.log);



// concat(interval(1000),of('This', 'Never', 'Runs') )
//   // log: 1,2,3,4.....
//   .subscribe(console.log);


const observable = forkJoin({
  foo: of(1, 2, 3, 5),
  bar: Promise.resolve(8),
  baz: timer(4000)
});
observable.subscribe({
 next: value => console.log(value),
 complete: () => console.log('This is how it ends!'),
});



const observable1 = forkJoin([
  of(1, 2, 3, 4),
  Promise.resolve(8),
  timer(4000)
]);
observable1.subscribe({
 next: value => console.log(value),
 complete: () => console.log('This is how it ends!'),
});


const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);  
//filter out non-even numbers  
const example = source.pipe(filter(num => num % 2 === 0));  
const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));  


// const source1 = interval(1000);
// const clicks1 = fromEvent(document, 'click');
// const result1 = source1.pipe(takeUntil(clicks1));
// result1.subscribe(x => console.log(x));
//   }

  const searchbox = document.getElementById("search")!;
  const keyup = fromEvent(searchbox, 'keyup');
  keyup.pipe(  
    map((i: any) => i.currentTarget.value),  
    debounceTime(1000)  
  )  
  .subscribe(console.log);

  const switched = of(1, 2, 3).pipe(switchMap(x => of(x, x ** 2, x ** 3)));
  switched.subscribe(x => console.log(x));

  }
}
