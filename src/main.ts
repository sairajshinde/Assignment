import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';  // Import HttpClient

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]  // Use the `provideHttpClient()` for HttpClient
}).catch(err => console.error(err));
