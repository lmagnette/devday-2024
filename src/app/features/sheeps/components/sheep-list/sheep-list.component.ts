import {Component, computed, effect, inject, linkedSignal, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {SheepSummaryCardComponent} from "../sheep-summary-card/sheep-summary-card.component";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatFabButton, MatIconButton} from "@angular/material/button";
import {SheepService} from "../../services/sheep.service";
import {toSignal} from '@angular/core/rxjs-interop';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Sheep} from '../../models/sheep';
import {MatDialog} from '@angular/material/dialog';
import {SheepCreateComponent} from '../sheep-create/sheep-create.component';


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
    MatFabButton
  ], // Standalone component with Angular Material
    templateUrl: './sheep-list.component.html',
    styleUrls: ['./sheep-list.component.scss']
})
export class SheepListComponent implements OnInit {
    service = inject(SheepService);
    readonly dialog = inject(MatDialog);

    httpSheeps = toSignal(this.service.list(), {initialValue:[]});
    snackbar = inject(MatSnackBar);
    searchValue= signal<string>('');

    sheepList = linkedSignal<Sheep[]>(() => this.httpSheeps() || []);

    filteredSheepList = computed(() => {
      const search = this.searchValue();
      const sheeps = this.sheepList();
      return sheeps.filter( s => s.name.toUpperCase().includes(search.toUpperCase()));
    })
  likes=signal<number>(0);

  constructor() {
    effect(() => {
      this.sheepLiked(this.likes());
    });
  }

    ngOnInit(): void {
    }

  sheepLiked(like: number) {
    if(like)
      this.snackbar.open(`A sheep has been liked ${like} times`);

  }

  openDialog(): void {
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
    const dialogRef = this.dialog.open(SheepCreateComponent, {
      data: newSheep,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        newSheep.name=result;
        this.sheepList.update( sheeps => [...sheeps, newSheep])
      }
    });
  }
}
