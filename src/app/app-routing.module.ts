import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModalsComponent } from './modals/modals.component';

export const routes: Routes = [
  { path: '', redirectTo: 'modals', pathMatch: 'full' },
  { path: 'modals', component:  ModalsComponent}
];

export const routing = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  useHash: false
});
