import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla' },
    { id: 2, brand: 'Honda', model: 'Civic' },
    { id: 3, brand: 'Jeep', model: 'Cherokee' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(carId: number) {
    const cart = this.cars.find(({ id }) => id === carId);

    if (!cart) {
      throw new NotFoundException(`Car with id ${carId} not found.`);
    }

    return cart;
  }
}
