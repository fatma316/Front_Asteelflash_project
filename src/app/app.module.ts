import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjetComponent } from './projet/projet.component';
import { AddprojetComponent } from './addprojet/addprojet.component';
import { EditprojetComponent } from './editprojet/editprojet.component';
import { MethodisteComponent } from './methodiste/methodiste.component';
import { AddmethodisteComponent } from './addmethodiste/addmethodiste.component';
import { EditmethodisteComponent } from './editmethodiste/editmethodiste.component';
import { OperateurComponent } from './operateur/operateur.component';
import { AddoperateurComponent } from './addoperateur/addoperateur.component';
import { EditoperateurComponent } from './editoperateur/editoperateur.component';
import { ValidateurComponent } from './validateur/validateur.component';
import { ValidationComponent } from './validation/validation.component';
import { CardsComponent } from './cards/cards.component';
import { LoginMethodisteComponent } from './login-methodiste/login-methodiste.component';
import { DashboardMethoComponent } from './dashboard-metho/dashboard-metho.component';
import { LoginOperatorComponent } from './login-operator/login-operator.component';
import { DashboardOperatorComponent } from './dashboard-operator/dashboard-operator.component';
import { LoginValidatorComponent } from './login-validator/login-validator.component';
import { DashboardValidatorComponent } from './dashboard-validator/dashboard-validator.component';
import { ProjetvalidateurComponent } from './projetvalidateur/projetvalidateur.component';
import { ValidationTableauComponent } from './validation-tableau/validation-tableau.component';
import { UpdateEtatComponent } from './update-etat/update-etat.component';
import {NgbModule} from  '@ng-bootstrap/ng-bootstrap';
import { ProjetValidationComponent } from './projet-validation/projet-validation.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditvalidatorComponent } from './editvalidator/editvalidator.component';
import { AddvalidatorComponent } from './addvalidator/addvalidator.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ConsultervalidationComponent } from './consultervalidation/consultervalidation.component';
import { ConsultervalidationoperatorComponent } from './consultervalidationoperator/consultervalidationoperator.component';
import { OperateurValidationComponent } from './operateur-validation/operateur-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProjetComponent,
    AddprojetComponent,
    EditprojetComponent,
    MethodisteComponent,
    AddmethodisteComponent,
    EditmethodisteComponent,
    OperateurComponent,
    AddoperateurComponent,
    EditoperateurComponent,
    ValidateurComponent,
    ValidationComponent,
    CardsComponent,
    LoginMethodisteComponent,
    DashboardMethoComponent,
    LoginOperatorComponent,
    DashboardOperatorComponent,
    LoginValidatorComponent,
    DashboardValidatorComponent,
    ProjetvalidateurComponent,
    ValidationTableauComponent,
    UpdateEtatComponent,
    ProjetValidationComponent,
    EditvalidatorComponent,
    AddvalidatorComponent,
    PieChartComponent,
    ConsultervalidationComponent,
    ConsultervalidationoperatorComponent,
    OperateurValidationComponent,
    ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
ReactiveFormsModule,
Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
