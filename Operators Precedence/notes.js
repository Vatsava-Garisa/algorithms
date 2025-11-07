
/** Precedence Table
 * Precedence	Operator Type	            Operators	            Associativity
 * 21	        Member Access/Grouping/     (), [], ., ?.           Left → Right
 *              Optional Chaining
 * 20	        new (with arguments)        new
 * 19	        Function Call               ()	                    Left → Right
 * 18	        Postfix Increment/Decrement	a++, a--	            N/A
 * 17	        Unary/typeof/delete/await   !, ~, +, -, typeof,     Right → Left
 *                                          void, delete, await
 * 16	        Exponentiation              **                      Right → Left
 * 15	        Multiplicative              *, /, %	                Left → Right
 * 14	        Additive                    +, -	                Left → Right
 * 13	        Bitwise Shift               <<, >>, >>>             Left → Right
 * 12	        Relational                  <, <=, >, >=, in,       Left → Right
 *                                          instanceof 
 * 11	        Equality                    ==, !=, ===, !==        Left → Right
 * 10	        Bitwise AND                 &                       Left → Right
 * 9	        Bitwise XOR                 ^                       Left → Right
 * 8	        Bitwise OR                  |                       Left → Right
 * 7	        Logical AND                 &&                      Left → Right
 * 6	        Logical OR                  ||                      Left → Right
 * 5	        Nullish Coalescing          ??                      Left → Right
 * 4	        Conditional(Ternary)	    condition?expr1:expr2	Right → Left
 * 3	        Assignment                  =, +=, -=, *=, /=, %=,  Right → Left
 *                                          <<=, >>=, >>>=, &=, ^=, 
 *                                          |=, **=, &&=, ||=, ??= 
 * 2	        Yield/Comma Expressions	    yield, yield*, ,	    Left → Right
 * 1       	    Comma	                    ,	                    Left → Right
 */

