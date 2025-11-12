
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

/** console.log([null] == 0); TRICKY (Conversion to Primitive using "ToPrimitive")
 * Predict the output: console.log([null] == 0);
 * Output: true
 */

/** console.log([] == 0);
 * Predict the output: console.log([] == 0);
 * Output: true
 */

/** console.log({} == "[object Object]");
 * Predict the output: console.log({} == "[object Object]");
 * Output: true
 */

/** console.log([1, 2] == "1,2");
 * Predict the output: console.log([1, 2] == "1,2");
 * Output: true
 */

/** console.log([] == ![]); TRICKY
 * Predict the output: console.log([] == ![]);
 * Output: true
 */

/** console.log(null === undefined); TRICKY
 * Predict the output: console.log(null === undefined);
 * Output: false
 */

/** console.log(null == undefined); TRICKY
 * Predict the output: console.log(null == undefined);
 * Output: true
 */

/** console.log("0" == false); TRICKY
 * Predict the output: console.log("0" == false);
 * Output: true
 */

/** console.log("" == false);
 * Predict the output: console.log("" == false);
 * Output: true
 */

/** console.log([undefined] == 0);
 * Predict the output: console.log([undefined] == 0);
 * Output: true
 */

/** console.log([,] == 0); TRICKY
 * Predict the output: console.log([,] == 0);
 * Output: true
 */

/** console.log([1] > null);
 * Predict the output: console.log([1] > null);
 * Output: true
 */

/** console.log([1] < [2]);
 * Predict the output: console.log([1] < [2]);
 * Output: true
 */

/** console.log("2" > "12"); TRICKY
 * Predict the output: console.log("2" > "12");
 * Output: true
 */

/** console.log("2" > 12);
 * Predict the output: console.log("2" > 12);
 * Output: false
 */

/** console.log(String({}));
 * Predict the output: console.log(String({}));
 * Output: "[object Object]"
 */

/** console.log(String([1, 2, 3]));
 * Predict the output: console.log(String([1, 2, 3]));
 * Output: 1,2,3
 */

/** console.log(String(null));
 * Predict the output: console.log(String(null));
 * Output: "null"
 */

/** console.log(Boolean([]));
 * Predict the output: console.log(Boolean([]));
 * Output: true
 */

/**  console.log(Boolean(0));
 * Predict the output: console.log(Boolean(0));
 * Output: false
 */

/** console.log(Boolean("false"));
 * Predict the output: console.log(Boolean("false"));
 * Output: true
 */

/** console.log(Number(undefined));
 * Predict the output: console.log(Number(undefined));
 * Output: NaN
 */

/** console.log(Number(null));
 * Predict the output: console.log(Number(null));
 * Output: 0
 */

/** console.log(Number(""));
 * Predict the output: console.log(Number(""));
 * Output: 0
 */

/** console.log(Number("123"));
 * Predict the output: console.log(Number("123"));
 * Output: 123
 */

/** console.log([] + []); TRICKY
 * Predict the output: console.log([] + []);
 * Output: ""
 */

/** console.log([] + {});
 * Predict the output: console.log([] + {});
 * Output: "[object Object]"
 */

/** console.log({} + []);
 * Predict the output: console.log({} + []);
 * Output: "[object Object]"
 */

/** console.log(+true);
 * Predict the output: console.log(+true);
 * Output: 1
 */

/** console.log(+false);
 * Predict the output: console.log(+false);
 * Output: 0
 */

/** console.log(+[]);
 * Predict the output: console.log(+[]);
 * Output: 0
 */

/** console.log(+{});
 * Predict the output: console.log(+{});
 * Output: NaN
 */

/** console.log(!!null == !!undefined);
 * Predict the output: console.log(!!null == !!undefined);
 * Output: true
 */

/** console.log([] == 0 && 0 == "0" && [] == "0");
 * Predict the output: console.log([] == 0 && 0 == "0" && [] == "0");
 * Output: false
 */

/** console.log((false || true) && "JS"); TRICKY
 * Predict the output: console.log((false || true) && "JS");
 * Output: "JS"
 */

/** console.log(0 || "0" && {});
 * Predict the output: console.log(0 || "0" && {});
 * Output: {}
 */

/** console.log([] + null + 1);
 * Predict the output: console.log([] + null + 1);
 * Output: "null1"
 */

/** console.log([] == ![]); TRICKY
 * Predict the output: console.log([] == ![]);
 * Output: true
 */

/** console.log("b" + "a" + +"a" + "a");
 * Predict the output: console.log("b" + "a" + +"a" + "a");
 * Output: "baNaNa"
 */

/** console.log(!!"false" == !!"true");
 * Predict the output: console.log(!!"false" == !!"true");
 * Output: true
 */

/** console.log(false == "0");
 * Predict the output: console.log(false == "0");
 * Output: true
 */

/** console.log(true == "true");
 * Predict the output: console.log(true == "true");
 * Output: false
 */

/** console.log([] == "");
 * Predict the output: console.log([] == "");
 * Output: true
 */

/** console.log([null] == ""); TRICKY
 * Predict the output: console.log([null] == "");
 * Output: true
 * null or undefined become empty strings when joined.
 */

/** console.log([undefined] == "");
 * Predict the output: console.log([undefined] == "");
 * Output: true
 * undefined or null become empty strings when joined.
 */

/** console.log([1, 2] + [3, 4]);
 * Predict the output: console.log([1, 2] + [3, 4]);
 * Output: "1,23,4"
 */

/** console.log([] == ![]);
 * Predict the output: console.log([] == ![]);
 * Output: 
 */

/** console.log({} + {}); TRICKY
 * Predict the output: console.log({} + {}); // tricky in Node vs browser
 * Output: 
 * Node - "[object Object][object Object]"
 * Browser - NaN
 */

/** console.log([] + {});
 * Predict the output: console.log([] + {}); // compare with previous one
 * Output: '[object Object]'
 */

/** console.log("5" + + "5");
 * Predict the output: console.log("5" + + "5");
 * Output: "55"
 */

/** console.log(0 == "\n"); TRICKY
 * Predict the output: console.log(0 == "\n");
 * Output: true
 */

/** console.log([] == 0 && "0" == 0 && [] == "0");
 * Predict the output: console.log([] == 0 && "0" == 0 && [] == "0");
 * Output: false
 */


