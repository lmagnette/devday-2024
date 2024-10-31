import {Component, computed, effect, inject, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {SheepSummaryCardComponent} from "../sheep-summary-card/sheep-summary-card.component";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {SheepService} from "../../services/sheep.service";
import {toSignal} from '@angular/core/rxjs-interop';
import {MatSnackBar} from '@angular/material/snack-bar';


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
        MatIconButton
    ], // Standalone component with Angular Material
    templateUrl: './sheep-list.component.html',
    styleUrls: ['./sheep-list.component.scss']
})
export class SheepListComponent implements OnInit {
    service = inject(SheepService);
    sheepList = toSignal(this.service.list(), {initialValue:[]});
    snackbar = inject(MatSnackBar);
    searchValue= signal<string>('');
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
}
