// 逻辑运算

/**
 * 返回类型A与类型B的相等性
 */
export type Equal<A, B> = [A] extends [B] ? [B] extends [A] ? true : false : false;

/**
 * 条件运算。如果类型Cond为true，则返回类型A，否则返回类型B
 */
export type If<Cond, A, B> = Cond extends true ? A : B;

/**
 * 将类型A转换为boolean型
 */
export type ToBoolean<A> = If<A, true, false>;

/**
 * 类型A与类型B的逻辑与运算
 */
export type And<A, B> = If<A, ToBoolean<B>, false>;

/**
 * 类型A与类型B的逻辑或运算
 */
export type Or<A, B> = If<A, true, ToBoolean<B>>;

/**
 * 类型A的逻辑否运算
 */
export type Not<A> = If<A, false, true>;

/**
 * 类型T是否为never
 */
export type IsNever<T> = Equal<T, never>;
