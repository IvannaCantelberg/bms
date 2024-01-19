import { Component } from '@angular/core';
import { AuthWithGoogleComponent } from './auth-with-google/auth-with-google.component';

@Component({
  selector: 'app-providers',
  standalone: true,
  providers: [],
  imports: [AuthWithGoogleComponent],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.scss'
})
export class ProvidersComponent { }
