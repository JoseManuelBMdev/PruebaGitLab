import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './registrer/registrer.component';
import { MenuComponent } from './menu/menu.component';
import { CamaraComponent } from './menu/camara/camara.component';
import { VideojuegoOneComponent } from './videojuego-one/videojuego-one.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'camera', component:CamaraComponent},
    {path:'menu', component:MenuComponent},
    {path: 'login', component:LoginComponent},
    {path: 'registrer', component:RegistrerComponent},
    {path: '', component:VideojuegoOneComponent}
    // {path: 'videojuegoOne', component:VideojuegoOneComponent}
];
