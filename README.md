<div align="center">
  
  ![lilcricket](https://user-images.githubusercontent.com/509054/164233040-8bf65eb0-09f5-4ec3-94f6-50efe6514621.png)
  
  # Easy number range numbers with steps
  
</div>

Minimal and handy utility to generate ranges of numbers with start, end and
optional steps or jumps!

## Use cases

- You need a simple, straightforward solution to generate numbers for an array
  to end on a determined number;
- Your array needs steps between numbers;
- Your array should be declarative, i.e. end on the defined number. If you
  explicit ask for 10, 10 should be the last number _unless_:
  - If you pass and _end_ parameter and is outside of the _step_, it will yield
    only up to steps you need to ensure the rule, otherwise you would get an
    result not in the step rule defined.

## Params

| Parameter 	| Description                                                                                                                                                                                                                                                                                                                	|
|:---------:	|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| first     	| **Required** _Number_ The first parameter defines the limit of the numbers returned. If you want a list from 0 up to x, just pass x. X will be included unless other rules apply.                                                                                                                                          	|
| second    	| _Optional_ _Number_ The second parameter defines the start. As usual all arrays start with the offset from the start, i.e. 0, with this parameter will decide a number that will be the starting point.                                                                                                                    	|
| third     	| _Optional_ _Number_ The thir parameter defines a step rule. This rules that precedence over the first one. If you want to generate numbers until x, with a gap or steps between them of 3, and the end number is greater than the step rule, it will be not returned, but will be used as a limit to the numbers returned. 	|

## How to use

You always should use with the spread operator.

```js
import { range } from "easy-range-numbers-with-steps";

const arrWithEnd = [...range(5)];

// arrWithEnd will be an array, with [0,1,2,3,4,5]

const arrWithEndAndStart = [...range(5, 10)];

// arrWithEndAndStart will be an array, with [5, 6, 7, 8, 9, 10]

const arrWithEndAndStartAndStep = [...range(10, 0, 2)];

// arrWithEndAndStart will be an array, with [0, 2, 4, 6, 8, 10]

const arrWithEndAndStartAndStep2 = [...range(11, 0, 2)];

// arrWithEndAndStart will be an array, with [0, 2, 4, 6, 8, 10]! 11 is the end, but outside of the desired steps!
```

If you use directly we'll just get an object with the Symbol and the Generator function. If this is what you want, that's ok! Just an friendly warning if you do not know what this means and you start to get "errors" for misuse.


```js
import { range } from "easy-range-numbers-with-steps";

const arr = range(5);

// You will not get an array! If you do a console.info(arr):
// { [Symbol(Symbol.iterator)]: [GeneratorFunction: generateRange] }
```

## Purpose

This is a minimal lib. No external dependencies, feel free to just copy if necessary to your project. It was created for a specific need and I wanted to share with someone with the same use-cases. Arrays are the bread and butter of web apps and is always handy use helper functions.

### Unit tests




## MIT License

Copyright (c) 2020 — 2022 [Ibrahim Cesar](https://ibrahimcesar.cloud)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
