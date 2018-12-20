import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { FeaturesComponent } from './features/features.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD8Ucu0vpHU-baIW5vGrn1ICVtKcdkuV-E'
    }),
  ],
  declarations: [HeaderComponent, HeroCarouselComponent, HighlightsComponent, FeaturesComponent, BannerComponent, FooterComponent, ContactUsComponent],
  exports : [HeaderComponent, HeroCarouselComponent, HighlightsComponent, FeaturesComponent, BannerComponent, FooterComponent, ContactUsComponent]
})
export class ComponentsModule { }
