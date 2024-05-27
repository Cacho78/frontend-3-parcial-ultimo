import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
        data: {
          title: 'Base'
        },
    children: [
        {
          path: '',
          redirectTo: 'cards',
          pathMatch: 'full'
        },
        {
          path: 'autos',
          loadComponent: () => import('./autos/autos.component').them(m => m.Autoscomponent),
          data: {
            title: 'Autos'
          }
        },
        {
          path: 'reportes',
          loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
          data: {
            title: 'Reportes'
          }
        },
    ]
  }  
]
