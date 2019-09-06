import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { UserRoutes } from './user-routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ],
  exports: [],
  declarations: [ProfileComponent],
  providers: [],
})
export class UserModule { }
