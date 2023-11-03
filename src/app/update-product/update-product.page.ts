import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.page.html',
  styleUrls: ['./update-product.page.scss'],
})
export class UpdateProductPage{

  public producForm: FormGroup

  constructor(private fomBuilder: FormBuilder, private productService: ProductService,private toastController: ToastController, private router:Router) {
    this.producForm = this.fomBuilder.group({
      name:['',Validators.required],
      price:[0,Validators.required],
      description:[''],
      photo:['',Validators.required],
      type:['',Validators.required],
    });

   }

   public async updateProduct(){
    const product = this.producForm.value;
    this.productService.addProducts(product);

    const toast = await this.toastController.create({
      message: 'Producto añadido',
      duration: 2000,
      position: 'bottom'
    });
    
    
    toast.present();
    this.router.navigate(['/tabs/tab1']);
  }

}