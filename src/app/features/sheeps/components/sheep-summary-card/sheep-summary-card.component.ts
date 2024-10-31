import {Component, effect, inject, Input, signal} from '@angular/core';
import {MatCard, MatCardActions, MatCardImage, MatCardTitle} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {Sheep} from "../../models/sheep";
import {MatIconAnchor, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {MatBadge} from '@angular/material/badge';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sheep-summary-card',
  standalone: true,
  imports: [
    MatCardImage,
    MatCardTitle,
    MatCard,
    NgOptimizedImage,
    MatIcon,
    MatCardActions,
    MatIconButton,
    MatIconAnchor,
    RouterLink,
    MatBadge
  ],
  templateUrl: './sheep-summary-card.component.html',
  styleUrl: './sheep-summary-card.component.scss'
})
export class SheepSummaryCardComponent {

  @Input({required:true}) sheep!: Sheep;

  likeCount = signal<number>(0);
  snackBar = inject(MatSnackBar);


  constructor() {
    effect(() => {
      const likes = this.likeCount();
      if(likes)
        this.snackBar.open(`${this.sheep.name} has been liked ${likes} times`);
    });
  }

  like() {
    this.likeCount.update(v => v+1);
  }
}
