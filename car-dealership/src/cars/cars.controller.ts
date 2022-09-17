import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findCardById(@Param('id', ParseIntPipe) carId: number) {
    return this.carsService.findOneById(carId);
  }

  @Post()
  createCar(@Body() payload: any) {
    return payload;
  }

  @Put(':id')
  updateCar(@Param('id', ParseIntPipe) carId: number, @Body() payload: any) {
    return payload;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) carId: number) {
    return {
      method: 'delete',
      id: carId,
    };
  }
}
