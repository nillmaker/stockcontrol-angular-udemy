import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule} from 'primeng/table'
import { InputMaskModule} from 'primeng/inputmask'
import { InputSwitchModule} from 'primeng/inputswitch'
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';
import { ProductHomeComponent } from './page/product-home/product-home.component';
import { RouterModule } from '@angular/router';
import { PRODUCT_ROUTES } from './products.routing';
import { ProductTableComponent } from './components/product-table/product-table.component';

@NgModule({
  declarations: [
    ProductHomeComponent,
    ProductTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    //Primeng
    CardModule,
    ButtonModule,
    TableModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    DynamicDialogModule,
    DropdownModule,
    ConfirmDialogModule,
    TooltipModule,
    RouterModule.forChild(PRODUCT_ROUTES)
  ],
  providers: [
    DialogService,
    ConfirmationService
  ]
})
export class ProductsModule { }
