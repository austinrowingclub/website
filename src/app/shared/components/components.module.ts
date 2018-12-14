import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { FeaturesComponent } from './features/features.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, HeroCarouselComponent, HighlightsComponent, FeaturesComponent, BannerComponent, FooterComponent, ContactUsComponent],
  exports : [HeaderComponent, HeroCarouselComponent, HighlightsComponent, FeaturesComponent, BannerComponent, FooterComponent, ContactUsComponent]
})
export class ComponentsModule { }
