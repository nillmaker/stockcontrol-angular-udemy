import { ProductEvent } from 'src/app/models/enums/products/ProductEvent';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { EventAction } from 'src/app/models/interfaces/products/event/EventAction';
import { GetAllProductsResponse } from 'src/app/models/interfaces/products/response/GetAllProductsResponse';
import { DeleteProductAction } from 'src/app/models/interfaces/products/event/DeleteProductAction';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: []
})
export class ProductTableComponent {
  @Input() products: Array<GetAllProductsResponse> = [];
  @Output() productEvent = new EventEmitter<EventAction>();
  @Output() deleteProductEvent = new EventEmitter<DeleteProductAction>();

  public productSelected!: GetAllProductsResponse;
  public addProductEvent = ProductEvent.ADD_PRODUCT_EVENT;
  public editProductEvent = ProductEvent.EDIT_PRODUCT_EVENT;

  handleProductEvent(action: string, id?: string){

    if (action && action !== ''){
      const ProductEventData = id && action !== '' ? {action, id} : {action};
      this.productEvent.emit(ProductEventData)
    }

  }

  handleDeleteProduct(product_id: string, productName: string){
    if(product_id !== '' && productName !== ''){
      this.deleteProductEvent.emit({product_id, productName});
    }
  }

}
