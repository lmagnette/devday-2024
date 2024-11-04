import {Component, inject, model} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef, MatDialogTitle
} from '@angular/material/dialog';
import {Sheep} from '../../models/sheep';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-sheep-create',
  standalone:true,
  imports: [
    MatDialogContent,
    MatFormField,
    MatDialogActions,
    FormsModule,
    MatInput,
    MatButton,
    MatDialogClose,
    MatDialogTitle,
    MatLabel,
  ],
  templateUrl: './sheep-create.component.html',
  styleUrl: './sheep-create.component.scss'
})
export class SheepCreateComponent {
  readonly dialogRef = inject(MatDialogRef<SheepCreateComponent>);
  readonly data = inject<Sheep>(MAT_DIALOG_DATA);
  readonly name = model(this.data.name);

  onNoClick(): void {
    this.dialogRef.close();
  }


}
