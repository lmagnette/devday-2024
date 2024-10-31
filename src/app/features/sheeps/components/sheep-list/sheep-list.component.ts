import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {SheepSummaryCardComponent} from "../sheep-summary-card/sheep-summary-card.component";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {SheepService} from "../../services/sheep.service"; // Import Angular Material Card module


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
    // Using Angular signals to manage the sheep list reactively
    service = inject(SheepService);
    sheepList = this.service.list();
    searchValue: string = '';

    ngOnInit(): void {
    }
}
