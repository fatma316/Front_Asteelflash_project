import { ConsultervalidationComponent } from './consultervalidation/consultervalidation.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { AddvalidatorComponent } from './addvalidator/addvalidator.component';
import { ProjetValidationComponent } from './projet-validation/projet-validation.component';
import { UpdateEtatComponent } from './update-etat/update-etat.component';
import { ValidationTableauComponent } from './validation-tableau/validation-tableau.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../app/login/login.component';
import { AddmethodisteComponent } from './addmethodiste/addmethodiste.component';
import { AddoperateurComponent } from './addoperateur/addoperateur.component';
import { AddprojetComponent } from './addprojet/addprojet.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardMethoComponent } from './dashboard-metho/dashboard-metho.component';
import { DashboardOperatorComponent } from './dashboard-operator/dashboard-operator.component';
import { DashboardValidatorComponent } from './dashboard-validator/dashboard-validator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditmethodisteComponent } from './editmethodiste/editmethodiste.component';
import { EditprojetComponent } from './editprojet/editprojet.component';
import { LoginMethodisteComponent } from './login-methodiste/login-methodiste.component';
import { LoginOperatorComponent } from './login-operator/login-operator.component';
import { LoginValidatorComponent } from './login-validator/login-validator.component';
import { MethodisteComponent } from './methodiste/methodiste.component';
import { OperateurComponent } from './operateur/operateur.component';
import { ProjetComponent } from './projet/projet.component';
import { ProjetvalidateurComponent } from './projetvalidateur/projetvalidateur.component';
import { ValidateurComponent } from './validateur/validateur.component';
import { ValidationComponent } from './validation/validation.component';
import { EditoperateurComponent } from './editoperateur/editoperateur.component';
import { EditvalidatorComponent } from './editvalidator/editvalidator.component';
import { OperateurValidationComponent } from './operateur-validation/operateur-validation.component';

const routes: Routes = [
  {path:'cards',component:CardsComponent},
  {path : 'login' , component:LoginComponent},
  {path : 'dashboard', component:DashboardComponent},
  {path: '', redirectTo: '/cards', pathMatch: 'full' },
  {path: 'projets',component:ProjetComponent},
  {path: 'methodiste',component:MethodisteComponent},
  {path:'editMethodiste/:id',component:EditmethodisteComponent},
{path:'editProjet/:id',component:EditprojetComponent},
{path:'editOperateur/:id',component:EditoperateurComponent},

{path:'addMethodiste',component:AddmethodisteComponent},
{path:'addProjet',component:AddprojetComponent} ,
{path:'operateur',component:OperateurComponent},
{path:'addOperateur',component:AddoperateurComponent},
{path:'validateur',component:ValidateurComponent},
{path :'addvalidator',component :AddvalidatorComponent} , 
{path:'editvalidator/:id',component:EditvalidatorComponent}, 
{path:'login_methodiste',component:LoginMethodisteComponent},
{path:'dashboard_metho',component:DashboardMethoComponent},
{path:'login_operator',component:LoginOperatorComponent},
{path:'dashboard_operator',component:DashboardOperatorComponent},
{path:'login_validator',component:LoginValidatorComponent},
{path:'dashboard_validator',component:DashboardValidatorComponent},
{path:'projetvalidateur',component:ProjetvalidateurComponent},
{path:'validation-tableau',component:ValidationTableauComponent},
{path:'validation/:id',component:ValidationComponent},
{path:'projet-validation',component:ProjetValidationComponent},

{path:'update_etat',component:UpdateEtatComponent},
{path:'piechart',component:PieChartComponent},
{path:'consultervalidation',component:ConsultervalidationComponent},
{path:'operateurvalidation',component:OperateurValidationComponent}
];
@NgModule({
 

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
