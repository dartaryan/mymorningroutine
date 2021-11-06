import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { NgxEmojiPickerModule } from 'ngx-emoji-picker';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { UserComponent } from './components/user/user.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { OrderByPipe } from './pipes/order-by.pipe';
import { EmojiPickerComponent } from './components/emoji-picker/emoji-picker.component';
import { NgxEmojModule } from 'ngx-emoj';
import { LoginComponent } from './pages/login/login.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: LoginComponent },
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
    UserComponent,
    OrderByPipe,
    EmojiPickerComponent,
    LoginComponent,
    LoginButtonComponent,
  ],

  imports: [
    
    BrowserModule,
    CoolSocialLoginButtonsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxEmojiPickerModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    SocialLoginModule,
  
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    NgxEmojModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('clientId'),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId'),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
  exports: [OrderByPipe],
})
export class AppModule {}
