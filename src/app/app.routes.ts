import {Routes} from '@angular/router';
import {SheepListComponent} from "./features/sheeps/components/sheep-list/sheep-list.component";
import {SheepDetailsComponent} from "./features/sheeps/components/sheep-details/sheep-details.component";
import {sheepResolver} from "./features/sheeps/resolvers/sheep.resolver";
import {ResourceComponent} from './features/sheeps/components/resource/resource.component';

export const routes: Routes = [
  {
    path: 'sheeps',
    loadComponent: () => SheepListComponent
  },
  {
    path: 'sheeps/:id',
    loadComponent: () => SheepDetailsComponent,
    resolve: {
      sheep: sheepResolver
    }
  },
  {
    path: 'resource',
    loadComponent: () => ResourceComponent
  },
  {
    path: '**',
    redirectTo: 'sheeps'
  },
];
