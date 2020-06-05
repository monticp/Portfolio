import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/contact',
        pathMatch: 'full'
    },
    {
        path: 'about',
        loadChildren: () => import('./modules/app.sections/about-module/about.module')
                    .then(m => m.AboutModule)
    },
    {
        path: 'contact',
        loadChildren: () => import('./modules/app.sections/contact-module/contact.module')
            .then(m => m.ContactModule)
    },
    {
        path: 'underconstruction',
        loadChildren: () => import('./modules/app.sections/under-construction-page-module/under-construction-page.module')
        .then(m => m.UnderConstructionPageModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
