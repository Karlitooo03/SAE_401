// box-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoxesService } from '../boxes/boxes.service';
import { Box } from '../boxes/box.model';

@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.css'],
})
export class BoxDetailsComponent implements OnInit {
  boxDetails!: Box; // Ajoutez le point d'exclamation pour indiquer que cela sera initialisé ultérieurement

  constructor(private route: ActivatedRoute, private boxesService: BoxesService) {}

  ngOnInit(): void {
    const boxIdString = this.route.snapshot.paramMap.get('id');

    if (boxIdString) {
      const boxId = +boxIdString;
      this.boxDetails = this.boxesService.getBoxDetails(boxId);
    } else {
      // Gérez le cas où 'id' est null (éventuellement redirigez l'utilisateur ou affichez un message d'erreur)
    }
  }
}
