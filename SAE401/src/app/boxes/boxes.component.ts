import { Component, OnInit } from '@angular/core';
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
    this.boxesService.getBoxes().subscribe((boxes) => {
      this.boxes = boxes;
    });

    this.boxesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  addToCart(box: Box): void {
    const cartItem = this.cart.find((item) => item.id === box.id);
    const totalCartQuantity = this.cart.reduce((total, item) => total + item.quantity, 0);

    if (totalCartQuantity < this.maxBoxes) {
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cart.push({ ...box, quantity: 1 });
      }

      box.quantity++;
      this.totalAmount += box.price;
    }
  }

  removeFromCart(box: Box): void {
    const cartItem = this.cart.find((item) => item.id === box.id);

    if (cartItem && cartItem.quantity > 0) {
      cartItem.quantity--;

      if (cartItem.quantity === 0) {
        this.cart = this.cart.filter((item) => item.id !== box.id);
      }

      box.quantity = Math.max(0, box.quantity - 1);
      this.totalAmount -= box.price;
    }
  }

  placeOrder(): void {
    console.log('Order placed!');
    console.log('Total Amount:', this.totalAmount);
  }

  changeSort(criteria: string): void {
    this.currentSort = criteria;

    if (criteria === 'price') {
      this.boxes.sort((a, b) => a.price - b.price);
    } else if (criteria === 'name') {
      this.boxes.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      this.boxesService.getBoxes().subscribe((boxes) => {
        this.boxes = boxes;
      });
    }
  }

  filterByCategory(category: string): void {
    if (category === 'all') {
      // Si la catégorie est 'all', réinitialiser pour afficher toutes les boîtes
      this.boxesService.getBoxes().subscribe((boxes) => {
        this.boxes = boxes;
      });
    } else {
      // Filtrer les boîtes par catégorie sélectionnée
      this.boxesService.getBoxesByCategory(category).subscribe((boxes) => {
        this.boxes = boxes;
      });
    }
  }
}
