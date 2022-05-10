import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { IAmComponent } from './components/about-card/i-am.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule} from '@angular/forms';
//import { InterceptorService } from './services/interceptor.service';
import { EstudioCardComponent } from './components/estudio-card/estudio-card.component';
import { EstudioComponent } from './components/estudio/estudio.component';
import { AboutComponent } from './components/about/about.component';
import { PostComponent } from './components/post/post.component';
import { SkillPostComponent } from './components/postOptions/skill-post/skill-post.component';
import { ExperiencePostComponent } from './components/postOptions/experience-post/experience-post.component';
import { EstudyPostComponent } from './components/postOptions/estudy-post/estudy-post.component';
import { AboutPostComponent } from './components/postOptions/about-post/about-post.component';
import { AboutUpDataComponent } from './components/upData/about-up-data/about-up-data.component';
import { SkillUpDataComponent } from './components/upData/skill-up-data/skill-up-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillCardComponent,
    NavBarComponent,
    ExperienceComponent,
    ExperienceCardComponent,
    SkillListComponent,
    ContactComponent,
    IAmComponent,
    MenuComponent,
    LoginComponent,
    IniciarSesionComponent,
    HomeComponent,
    EstudioCardComponent,
    EstudioComponent,
    AboutComponent,
    PostComponent,
    SkillPostComponent,
    ExperiencePostComponent,
    EstudyPostComponent,
    AboutPostComponent,
    AboutUpDataComponent,
    SkillUpDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
 //   {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
