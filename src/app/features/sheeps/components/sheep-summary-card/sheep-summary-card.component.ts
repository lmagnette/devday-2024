import {Component, Input, resource, ResourceRef} from '@angular/core';
import {MatCard, MatCardActions, MatCardImage, MatCardTitle} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {Sheep} from "../../models/sheep";
import {MatIconAnchor, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sheep-summary-card',
  standalone: true,
  imports: [
    MatCardImage,
    MatCardTitle,
    MatCard,
    MatIcon,
    MatCardActions,
    MatIconButton,
    MatIconAnchor,
    RouterLink,
    NgOptimizedImage,
  ],
  templateUrl: './sheep-summary-card.component.html',
  styleUrl: './sheep-summary-card.component.scss'
})
export class SheepSummaryCardComponent {

  @Input({required:true}) sheep!: Sheep;

  like() {

  }
}
