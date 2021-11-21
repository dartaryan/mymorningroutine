import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/buttons/button/button.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { NgxEmojiPickerModule } from 'ngx-emoji-picker';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialLoginModule } from 'angularx-social-login';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { OrderByPipe } from './pipes/order-by.pipe';
import { EmojiPickerComponent } from './components/emoji-picker/emoji-picker.component';
import { NgxEmojModule } from 'ngx-emoj';
import { LoginComponent } from './pages/login/login.component';

import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { UserTasksPipe } from './pipes/user-tasks.pipe';
import { LoginSunComponent } from './decorations/login-sun/login-sun.component';
import { LoginGreetingComponent } from './decorations/login-greeting/login-greeting.component';
import { LogoutButtonComponent } from './components/buttons/logout-button/logout-button.component';
import { FlyingSquaresComponent } from './decorations/flying-squares/flying-squares.component';
import { GoogleButtonComponent } from './components/buttons/google-button/google-button.component';
import { FacebookButtonComponent } from './components/buttons/facebook-button/facebook-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DayBgComponent } from './decorations/day-bg/day-bg.component';
import { MicrosoftButtonComponent } from './components/buttons/microsoft-button/microsoft-button.component';
import { GithubButtonComponent } from './components/buttons/github-button/github-button.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiMartComponent } from './components/emoji-mart/emoji-mart.component';
import { MatTooltipModule } from '@angular/material/tooltip';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,

    OrderByPipe,
    EmojiPickerComponent,
    LoginComponent,
    UserTasksPipe,
    LoginSunComponent,
    LoginGreetingComponent,
    LogoutButtonComponent,
    FlyingSquaresComponent,
    GoogleButtonComponent,
    FacebookButtonComponent,
    DayBgComponent,
    MicrosoftButtonComponent,
    GithubButtonComponent,
    EmojiMartComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    FormsModule,
    CoolSocialLoginButtonsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxEmojiPickerModule.forRoot(),
    PickerModule,

    SocialLoginModule,
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    NgxEmojModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTooltipModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  exports: [OrderByPipe, UserTasksPipe],
})
export class AppModule {}
