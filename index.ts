import { startWith } from 'rxjs/operators';
import { of } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/combination/startwith

//emit (1,2,3)
const src = of(1, 2, 3);
const example = src.pipe(startWith('first val'));
//output: 0,1,2,3
const subscribe = example.subscribe((val) => console.log(val));
