import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrimeroComponent } from './pages/primero/primero.component';
import { SegundoComponent } from './pages/segundo/segundo.component';
import { TerceroComponent } from './pages/tercero/tercero.component';
import { CuartoComponent } from './pages/cuarto/cuarto.component';

const approutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cumplimientoPOE', component: PrimeroComponent},
  {path: 'participarC', component: SegundoComponent},
  {path: 'consultarMM', component: TerceroComponent},
  {path: 'credencialMM', component: CuartoComponent},
  {path: '**',pathMatch: 'full', redirectTo: ''}


];

@NgModule({
  imports: [RouterModule.forRoot(approutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
