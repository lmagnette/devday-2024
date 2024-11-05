import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {SheepSummaryCardComponent} from "../sheep-summary-card/sheep-summary-card.component";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {SheepService} from "../../services/sheep.service";
import {MatToolbar} from '@angular/material/toolbar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {SheepPopupComponent} from '../sheep-popup/sheep-popup.component';
import {Sheep} from '../../models/sheep'; // Import Angular Material Card module


@Component({
    selector: 'app-sheep-list',
    standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    SheepSummaryCardComponent,
    MatSuffix,
    MatFormField,
    MatInput,
    FormsModule,
    MatIcon,
    MatLabel,
    MatIconButton,
    MatToolbar
  ], // Standalone component with Angular Material
    templateUrl: './sheep-list.component.html',
    styleUrls: ['./sheep-list.component.scss']
})
export class SheepListComponent implements OnInit {
    // Using Angular signals to manage the sheep list reactively
    service = inject(SheepService);
    dialog = inject(MatDialog);
    sheepList = this.service.list();
    searchValue: string = '';

    ngOnInit(): void {
    }


  openSheepForm() {
    const newSheep:Sheep = {
      id: 1001,
      name: '',
      age: 10,
      breed: 'unkown',
      woolColor: 'unkown',
      isSheared: false,
      weight: 50 ,
      imageUrl: './assets/images/unknown.webp',
      description:'',
      temperament: 'Calm'
    };

    const dialogRef = this.dialog.open(SheepPopupComponent, {data: newSheep});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('New Sheep Data:', result);
        // Handle the result data, e.g., save it to the database
      }
    });
  }
}
