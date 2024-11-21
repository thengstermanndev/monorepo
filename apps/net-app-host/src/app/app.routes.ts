import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'event_sale',
    loadChildren: () =>
      import('event_sale/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'event_admin',
    loadChildren: () =>
      import('event_admin/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
