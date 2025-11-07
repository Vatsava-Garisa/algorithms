
/** console.log(1 + "2" + 3);
 * Predict the output: console.log(1 + "2" + 3);
 * Output: '123'
 */

/** console.log("5" - 3);
 * Predict the output: console.log("5" - 3);
 * Output: 2
 */

/** console.log("10" * "2");
 * Predict the output: console.log("10" * "2");
 * Output: 20
 */

/** console.log(true + false);
 * Predict the output: console.log(true + false);
 * Output: 1
 */

/** console.log(10 + null);
 * Predict the output: console.log(10 + null);
 * Output: 10
 */

/** console.log(10 + undefined);
 * Predict the output: console.log(10 + undefined);
 * Output: NaN
 */

/** console.log("5" + 1 + 2);
 * Predict the output: console.log("5" + 1 + 2);
 * Output: "512"
 */

/** console.log(1 + 2 + "3");
 * Predict the output: console.log(1 + 2 + "3");
 * Output: "33"
 */

/** console.log("10" - "4" + "2");
 * Predict the output: console.log("10" - "4" + "2");
 * Output: "62"
 */

/** console.log("5" - - "2"); TRICKY
 * Predict the output: console.log("5" - - "2");
 * Output: 7
 */

/** if (" ") console.log("Truthy"); else console.log("Falsy");
 * Predict the output: if (" ") console.log("Truthy"); else console.log("Falsy");
 * Output: Truthy
 */

/** if ([]) console.log("Truthy"); else console.log("Falsy");
 * Predict the output: if ([]) console.log("Truthy"); else console.log("Falsy");
 * Output: Truthy
 */

/** if (0) console.log("Truthy"); else console.log("Falsy");
 * Predict the output: if (0) console.log("Truthy"); else console.log("Falsy");
 * Output: Falsy
 */

/** if (null) console.log("Truthy"); else console.log("Falsy");
 * Predict the output: if (null) console.log("Truthy"); else console.log("Falsy");
 * Output: Falsy
 */

/** if (NaN) console.log("Truthy"); else console.log("Falsy");
 * Predict the output: if (NaN) console.log("Truthy"); else console.log("Falsy");
 * Output: False
 */

/** if ("false") console.log("Truthy"); else console.log("Falsy");
 * Predict the output: if ("false") console.log("Truthy"); else console.log("Falsy");
 * Output: Truthy
 */

/** if (new Boolean(false)) console.log("Truthy"); else console.log("Falsy"); TRICKY
 * Predict the output: if (new Boolean(false)) console.log("Truthy"); else console.log("Falsy");
 * Output: Truthy
 */

/** console.log(0 == false);
 * Predict the output: console.log(0 == false);
 * Output: true
 */

/** 
 * Predict the output: console.log([null] == 0);
 * Output: 
 */

/** 
 * Predict the output: console.log([] == 0);
 * Output: 
 */

/** 
 * Predict the output: console.log({} == "[object Object]");
 * Output: 
 */

/** 
 * Predict the output: console.log([1, 2] == "1,2");
 * Output: 
 */

/** 
 * Predict the output: console.log([] == ![]);
 * Output: 
 */

/** 
 * Predict the output: console.log(null === undefined);
 * Output: 
 */

/** 
 * Predict the output: console.log(null == undefined);
 * Output: 
 */

/** 
 * Predict the output: console.log("0" == false);
 * Output: 
 */

/** 
 * Predict the output: console.log("" == false);
 * Output: 
 */

/** 
 * Predict the output: console.log([undefined] == 0);
 * Output: 
 */

/** 
 * Predict the output: console.log([,] == 0);
 * Output: 
 */

/** 
 * Predict the output: console.log([1] > null);
 * Output: 
 */

/** 
 * Predict the output: console.log([1] < [2]);
 * Output: 
 */

/** 
 * Predict the output: console.log("2" > "12");
 * Output: 
 */

/** 
 * Predict the output: console.log("2" > 12);
 * Output: 
 */

/** 
 * Predict the output: console.log(String({}));
 * Output: 
 */

/** 
 * Predict the output: console.log(String([1, 2, 3]));
 * Output: 
 */

/** 
 * Predict the output: console.log(String(null));
 * Output: 
 */

/** 
 * Predict the output: console.log(Boolean([]));
 * Output: 
 */

/** 
 * Predict the output: console.log(Boolean(0));
 * Output: 
 */

/** 
 * Predict the output: console.log(Boolean("false"));
 * Output: 
 */

/** 
 * Predict the output: console.log(Number(undefined));
 * Output: 
 */

/** 
 * Predict the output: console.log(Number(null));
 * Output: 
 */

/** 
 * Predict the output: console.log(Number(""));
 * Output: 
 */

/** 
 * Predict the output: console.log(Number("123"));
 * Output: 
 */

/** 
 * Predict the output: console.log([] + []);
 * Output: 
 */

/** 
 * Predict the output: console.log([] + {});
 * Output: 
 */

/** 
 * Predict the output: console.log({} + []);
 * Output: 
 */

/** 
 * Predict the output: console.log(+true);
 * Output: 
 */

/** 
 * Predict the output: console.log(+false);
 * Output: 
 */

/** 
 * Predict the output: console.log(+[]);
 * Output: 
 */

/** 
 * Predict the output: console.log(+{});
 * Output: 
 */

/** 
 * Predict the output: console.log(!!null == !!undefined);
 * Output: 
 */

/** 
 * Predict the output: console.log([] == 0 && 0 == "0" && [] == "0");
 * Output: 
 */

/** 
 * Predict the output: console.log((false || true) && "JS");
 * Output: 
 */

/** 
 * Predict the output: console.log(0 || "0" && {});
 * Output: 
 */

/** 
 * Predict the output: console.log([] + null + 1);
 * Output: 
 */

/** 
 * Predict the output: console.log([] == ![]);
 * Output: 
 */

/** 
 * Predict the output: console.log("b" + "a" + +"a" + "a");
 * Output: 
 */

/** 
 * Predict the output: console.log(!!"false" == !!"true");
 * Output: 
 */

/** 
 * Predict the output: console.log(false == "0");
 * Output: 
 */

/** 
 * Predict the output: console.log(true == "true");
 * Output: 
 */

/** 
 * Predict the output: console.log([] == "");
 * Output: 
 */

/** 
 * Predict the output: console.log([null] == "");
 * Output: 
 */

/** 
 * Predict the output: console.log([undefined] == "");
 * Output: 
 */

/** 
 * Predict the output: console.log([1, 2] + [3, 4]);
 * Output: 
 */

/** 
 * Predict the output: console.log([] == ![]);
 * Output: 
 */

/** 
 * Predict the output: console.log({} + {}); // tricky in Node vs browser
 * Output: 
 */

/** 
 * Predict the output: console.log([] + {}); // compare with previous one
 * Output: 
 */

/** 
 * Predict the output: console.log("5" + + "5");
 * Output: 
 */

/** 
 * Predict the output: console.log(0 == "\n");
 * Output: 
 */

/** 
 * Predict the output: console.log([] == 0 && "0" == 0 && [] == "0");
 * Output: 
 */


