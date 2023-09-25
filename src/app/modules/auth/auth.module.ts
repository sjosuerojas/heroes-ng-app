import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '@ui/ui.module';
import { AuthRoutingModule } from '@auth/routes/auth-routing.module';

import { LayoutAuthComponent } from '@auth/components/layout-auth.component';
import { SignInComponent } from '@auth/components/sign-in/sign-in.component';
import { SignUpComponent } from '@auth/components/sign-up/sign-up.component';

@NgModule({
  declarations: [LayoutAuthComponent, SignInComponent, SignUpComponent],
  imports: [CommonModule, AuthRoutingModule, UiModule],
})
export class AuthModule {}
