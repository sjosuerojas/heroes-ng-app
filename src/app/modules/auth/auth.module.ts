import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutAuthComponent } from './components/layout-auth.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthRoutingModule } from './routes/auth-routing.module';

@NgModule({
  declarations: [LayoutAuthComponent, SignInComponent, SignUpComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
