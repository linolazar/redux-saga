
export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export interface Hotel {
  name: string,
  age: number,
  city: string
}