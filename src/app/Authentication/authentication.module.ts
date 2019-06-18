import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule } from "@angular/forms";
import { ConfirmPassword } from "../shared/confirm-password.directive";
import { HttpService } from "../Service/http.service";
import { AuthenticateService } from "../Service/authentication.service";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { CommonModule } from "@angular/common";
import { RegisterDonorComponent } from './register-donor/register-donor.component';

@NgModule({
    declarations:[
        LoginComponent,
        RegisterComponent,
        ConfirmPassword,
        RegisterDonorComponent  
    ],
    imports:[
        CommonModule,
        FormsModule,
        AuthenticationRoutingModule
    ],
    providers: [HttpService,AuthenticateService ]
})
export class AuthenticateModule{}