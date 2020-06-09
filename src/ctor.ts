/**
 * 构造函数
 */
export type Ctor<T extends {}> = new(...args: Array<any>) => T;
