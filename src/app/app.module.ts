import { NgModule } from '@angular/core'; //NgModule (For app.module)
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//components
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './features/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './features/success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,//declare component here and import it above
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
