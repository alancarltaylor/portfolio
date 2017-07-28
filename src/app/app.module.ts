import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SillynessComponent } from './sillyness/sillyness.component';
import { FormsModule } from '@angular/forms';

// Define the routes
const ROUTES = [
  {
    path: '',
    component: HomeComponent
  }
  // ,
  // {
  //   path: 'sites',
  //   component: SitesComponent,
  //   children: [
  //   { path: ':id', component: SiteComponent}
  //   ]
  // }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SillynessComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
