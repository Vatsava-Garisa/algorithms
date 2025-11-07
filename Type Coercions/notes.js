

let obj = { "A": 1, "B": 2 };
/**
 * String: '[object Object]'
 * Number: NaN
 * Boolean: true
 */

let empty_obj = {};
/**
 * String: '[object Object]'
 * Number: 0
 * Boolean: true
 */

let arr = ["A", 2, true];
/**
 * String: 'A,2,true'
 * Number: 1
 * Boolean: true
 */

let empty_arr = [];
/**
 * String: ''
 * Number: 0
 * Boolean: true
 */

let str = "Sree";
/**
 * String: 'Sree'
 * Number: NaN
 * Boolean: true
 */

let empty_str = '';
/**
 * String: ''
 * Number: NaN ('2104' => 2104)
 * Boolean: false
 */

let num = 1;
/**
 * String: '1'
 * Number: 1
 * Boolean: true
 */

let zero = 0;
/**
 * String: '0'
 * Number: 0
 * Boolean: false
 */

let TRUE = true;
/**
 * String: 'true'
 * Number: 1
 * Boolean: true
 */

let FALSE = false;
/**
 * String: 'false'
 * Number: 0
 * Boolean: false
 */

let NULL = null;
/**
 * String: 'null'
 * Number: 0
 * Boolean: false
 */

let UNDEFINED = undefined;
/**
 * String: 'undefined'
 * Number: NaN
 * Boolean: false
 */

let NAN = NaN;
/**
 * String: 'NaN'
 * Number: NaN
 * Boolean: false
 */

/*****************************************************************************************************************************/

/** ==
 * Loose Equality
 * Performs type coercion when operands have different type.
 * Uses ToPrimitive, ToNumber, etc.
 */

/** ===
 * Strict Equality
 * No type coercion at all
 * The two sides must be of same type to be considered equal.
 * If types differ then immediately false.
 */
