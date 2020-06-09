// 对象属性相关操作

/**
 * 从类型T中剔除以类型K为名的属性
 */
// export type Omit<T extends {}, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * 从类型A中剔除类型B中的同名属性
 */
export type Subtract<A extends {}, B extends {}> = Omit<A, keyof B>;

/**
 * 使用类型B重写类型A中的同名属性
 */
export type Overwrite<A extends {}, B extends {}> = Subtract<A, B> & B;

/**
 * 从类型A中筛选出值为类型B的属性名
 */
export type PickKeysByType<A extends {}, B> = { [K in keyof A]: A[K] extends B ? K : never }[keyof A];

/**
 * 从类型A中筛选出值为类型B的属性
 */
export type PickPropsByType<A extends {}, B> = Pick<A, PickKeysByType<A, B>>;

/**
 * 将类型T中名为K的属性设置为可选的
 */
export type SetOptional<T extends {}, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * 获取类型T中所有标记为可选的属性
 */
export type GetOptionalKeys<T extends {}> = { [key in keyof T]-?: Omit<T, key> extends T ? never : key; }[keyof T];
