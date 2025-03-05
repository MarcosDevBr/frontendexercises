import updateData from './updateData';

interface Person {
  name: string;
  country: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
  amount: number;
  description?: string;
}

describe('updateData', () => {
  it('should update existing properties with new values', () => {
    const currentObject: Person = { name: "Marcos", country: "Brasil", age: 22 };
    const newDataObject: Partial<Person> = { country: "Japão", age: 33 };
    
    const result = updateData(currentObject, newDataObject);
    
    expect(result).toEqual({
      name: "Marcos",
      country: "Japão",
      age: 33
    });
  });

  it('should not add new properties that do not exist in the original object', () => {
    const currentObject: Person = { name: "Marcos", country: "Brasil", age: 22 };
    const newDataObject: Partial<Product> = { price: 89.9, amount: 15, description: "camiseta 100% algodão" };
    
    const result = updateData(currentObject, newDataObject as Partial<Person>);
    
    expect(result).toEqual({
      name: "Marcos",
      country: "Brasil",
      age: 22
    });
  });

  it('should not update if new properties do not match original object properties', () => {
    const currentObject: Person = { name: "Rafael", country: "Chile", age: 42 };
    const newDataObject: Partial<Product> = { name: "Camiseta Polo", price: 59.9, amount: 30 };
    
    const result = updateData(currentObject, newDataObject as Partial<Person>);
    
    expect(result).toEqual({
      name: "Rafael",
      country: "Chile",
      age: 42
    });
  });
}); 