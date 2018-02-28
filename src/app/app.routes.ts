import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroComponent } from './componentes/heroes/hero.component';

const APP_ROUTES:Routes = [
    {path:'heroes', component:HeroesComponent},
    {path:'hero/:id', component:HeroComponent},
    {path:'**', pathMatch:'full', redirectTo:'heroes'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);