export interface IRepository<T> {
  create(data: any): Promise<T>;
  findAll(options?: any): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  update(id: string, data: Partial<T>): Promise<T>;
  delete(id: string): Promise<T | void>;
}
