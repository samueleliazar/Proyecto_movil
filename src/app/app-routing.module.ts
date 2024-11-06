import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'docente',
    loadChildren: () => import('./page/docente/docente.module').then( m => m.DocentePageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./page/alumno/alumno.module').then( m => m.AlumnoPageModule)
  },
  {
    path: 'verificacion',
    loadChildren: () => import('./page/verificacion/verificacion.module').then( m => m.VerificacionPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./page/qr/qr-genrated.module').then( m => m.QrGenratedPageModule)
  },
  {
    path: 'ramos',
    
    loadChildren: () => import('./page/ramos/ramos.module').then( m => m.RamosPageModule)
  },
  
  {
    path: 'perfil',
    loadChildren: () => import('./page/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  
  {
    path: 'lista-docente',
    loadChildren: () => import('./page/lista-docente/lista-docente.module').then( m => m.ListaDocentePageModule)

  },
  {
    path: 'code-verifi',
    loadChildren: () => import('./page/code-verifi/code-verifi.module').then( m => m.CodeVerifiPageModule)
  },
  {
    path: 'nueva-contrasena',
    loadChildren: () => import('./page/nueva-contrasena/nueva-contrasena.module').then( m => m.NuevaContrasenaPageModule)
  },
  {
    path: 'nueva-contrasena',
    loadChildren: () => import('./page/nueva-contrasena/nueva-contrasena.module').then( m => m.NuevaContrasenaPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'lista-alumno',
    loadChildren: () => import('./page/lista-alumno/lista-alumno.module').then( m => m.ListaAlumnoPageModule)
  },








]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

