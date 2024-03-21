import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BoxesService } from './boxes.service';
import { Box } from './box.model';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css'],
})
export class BoxesComponent implements OnInit {
  boxes: Box[] = [];
  cart: Box[] = [];
  totalAmount: number = 0;
  maxBoxes: number = 10;
  currentSort: string = 'default';
  categories: string[] = [];

  constructor(private boxesService: BoxesService) {}

  ngOnInit(): void {
    this.boxesService.getBoxes().subscribe(boxes => {
      this.boxes = boxes["boxes"].map((box: Box) => ({
        ...box,
        quantity: 0
      }));
    });
  
    this.boxesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  addToCart(box: Box): void {
    if (this.cart.length < this.maxBoxes) {
      const cartItem = this.cart.find(item => item.id === box.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cart.push({ ...box, quantity: 1 });
      }
      this.totalAmount += box.prix;
    } else {
      console.log('Maximum number of boxes reached in the cart.');
    }
  }
  
  
  
  
  
  
  removeFromCart(box: Box): void {
    const cartItemIndex = this.cart.findIndex((item) => item.id === box.id);
  
    if (cartItemIndex !== -1 && this.cart[cartItemIndex].quantity > 0) {
      this.cart[cartItemIndex].quantity--;
  
      const boxIndex = this.boxes.findIndex((item) => item.id === box.id);
      if (boxIndex !== -1) {
        this.boxes[boxIndex].quantity--;
      }
  
      if (this.cart[cartItemIndex].quantity === 0) {
        this.cart.splice(cartItemIndex, 1);
      }
      this.totalAmount -= box.prix; // Mettre à jour totalAmount lors de la suppression d'un article du panier
    }
  }
  
  
  

  placeOrder(): void {
    console.log('Order placed!');
    console.log('Total Amount:', this.totalAmount);
  }

  changeSort(criteria: string): void {
    this.currentSort = criteria;

    if (criteria === 'price') {
      this.boxes.sort((a, b) => a.prix - b.prix);
    } else if (criteria === 'name') {
      this.boxes.sort((a, b) => a.nom_box.localeCompare(b.nom_box));
    } else {
      this.boxesService.getBoxes().subscribe((boxes) => {
        this.boxes = boxes;
      });
    }
  }

  filterByCategory(category: string): void {
    if (category === 'all') {
      this.boxesService.getBoxes().subscribe((boxes) => {
        this.boxes = boxes;
      });
    } else {
      this.boxesService.getBoxesByCategory(category).subscribe((boxes) => {
        this.boxes = boxes;
      });
    }
  }

  @ViewChild('cartSidebar') cartSidebar!: ElementRef | null;

  cartSidebarVisible = false;

  toggleCart() {
    this.cartSidebarVisible = !this.cartSidebarVisible;
  }
  @ViewChild('categoriesContainer') categoriesContainer!: ElementRef | null;

  showCategories = false;

  toggleCategories() {
    this.showCategories = !this.showCategories;
  }

}
