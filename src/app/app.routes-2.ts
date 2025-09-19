import { Routes } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { RecoveryPasswordComponent } from './pages/recovery-password/recovery-password.component';

export const routes: Routes = [
  { path: '', component: RegisterFormComponent },
  { path: 'verify', component: EmailVerificationComponent },
  { path: 'recovery-password', component: RecoveryPasswordComponent }
];
