

let obj = { "A": 1, "B": 2 };
/**
 * String: '[object Object]'
 * Number: NaN
 * Boolean: true
 */

let empty_obj = {};
/**
 * String: '[object Object]'
 * Number: NaN
 * Boolean: true
 */

let arr = ["A", 2, true];
/**
 * String: 'A,2,true'
 * Number: NaN (['2104'] => 2104 | [21,04] => NaN)
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
 * Number: 0 ('2104' => 2104)
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
 * Abstract Equality
 * Performs type coercion when operands have different type.
 * Uses ToPrimitive, ToNumber, etc.
 * "Can I make you look the same by converting one of you?"
 */

/** Coercion rules for the == operator. (Same for !=)
 * 
 * if (Type(x) === Type(y)) return StrictEquality(x, y);
 * if (x is undefined && y is null) return true;
 * 
 * if (Type(x) is Number && Type(y) is String)
 * return x == ToNumber(y);
 * if (Type(x) is String && Type(y) is Number)
 * return ToNumber(x) == y;
 * 
 * if (Type(x) is Boolean)
 * return ToNumber(x) == y;
 * if (Type(y) is Boolean)
 * return x == ToNumber(y);
 * 
 * if (Type(x) is Object and Type(y) is Primitive)
 * return ToPrimitive(x) == y;
 * if (Type(y) is Object and Type(x) is Primitive)
 * return x == ToPrimitive(y);
 * 
 * return false;
 */

/*****************************************************************************************************************************/

/** ===
 * Strict Equality
 * No type coercion at all
 * The two sides must be of same type to be considered equal.
 * If types differ then immediately false.
 * "Are you the same type and the same value/reference?" (Same for !==)
 */
