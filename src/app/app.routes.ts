import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';

export const routes: Routes = [
{ path: '', redirectTo: '/account', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'account', component: AccountComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'pricing', component: PricingComponent }
];
