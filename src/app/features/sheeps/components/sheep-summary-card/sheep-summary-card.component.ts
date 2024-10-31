import {Component, effect, inject, input, output, signal} from '@angular/core';
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

  sheep = input.required<Sheep>();

  likeCount = signal<number>(0);
  likeCountChanged = output<number>();
  snackBar = inject(MatSnackBar);


  constructor() {
  }

  like() {
    this.likeCount.update(v => v+1);
    this.likeCountChanged.emit(this.likeCount());
  }
}
