import {Component, resource} from '@angular/core';
import {MatCard} from '@angular/material/card';
import {Sheep} from '../../models/sheep';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-resource',
  standalone:true,
  imports: [
    MatCard,
    JsonPipe
  ],
  templateUrl: './resource.component.html',
  styleUrl: './resource.component.scss'
})
export class ResourceComponent {
  sheeps = resource({
    loader: () => {
      return fetch(
        `/assets/data/sheeps.json`
      ).then(res => res.json() as Promise<Sheep[]>);
    }
  })
}
