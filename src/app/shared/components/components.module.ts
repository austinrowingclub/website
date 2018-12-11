import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { FeaturesComponent } from './features/features.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, HeroCarouselComponent, HighlightsComponent, FeaturesComponent, BannerComponent],
  exports : [HeaderComponent, HeroCarouselComponent, HighlightsComponent, FeaturesComponent, BannerComponent]
})
export class ComponentsModule { }
