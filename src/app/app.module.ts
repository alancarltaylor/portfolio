import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SillynessComponent } from './sillyness/sillyness.component';
import { FormsModule } from '@angular/forms';
import { SharedService } from './shared.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { FocusDirective } from './focus.directive';

// Define the routes
const ROUTES = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'projects', component: SillynessComponent  }
    ]
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
    SillynessComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
