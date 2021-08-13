import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {

// Formas de pasar parametros 

// Las rutas estatica siempre van antes de las dinamicas
  @Get('filter')
  getProductFilter() {
    return `endpoint del filter`;
  }

  @Get(':productoId')
  getProduct(@Param() params: any) {
   return `Producto ${params.productoId}`;
  }

  @Get('productsforma2/:productoId')
  getProduct2(@Param('productoId') productoId: string) {
   return `Producto: ${productoId}`;
  }
  // 

  /**
   * Parametros por Queryes
  */
  @Get()
  getProductQuery(@Query('limit') limit: number = 100, 
                  @Query('offset') offset: number = 0,
                  @Query('brand') brand: string,) {

    // const { limit, offset } = params;

    return `Productos: limit: ${limit}, offset: ${offset}, brand: ${brand}`;
    
  }
}
