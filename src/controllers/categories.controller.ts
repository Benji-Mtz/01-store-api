import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

// Se elimina categories del get ya que el decorador controller nos antepone ese nombre @Controller('categories')
//   @Get('categories/:id/products/:productoId') 

  @Get(':id/products/:productoId')
  getCategories(@Param( 'productoId') productoId: string, @Param('id') id: string) {
   return `Producto: ${productoId} & ${id}`;
  }
  // 
}
