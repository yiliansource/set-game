import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIconsModule } from '@ng-icons/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RangePipe } from './range.pipe';
import { SetBoardComponent } from './set-board/set-board.component';
import { SetCardComponent } from './set-card/set-card.component';

import {
  BootstrapLightbulbFill,
  BootstrapDice5Fill,
} from '@ng-icons/bootstrap-icons';

@NgModule({
  declarations: [AppComponent, SetBoardComponent, SetCardComponent, RangePipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ BootstrapLightbulbFill, BootstrapDice5Fill }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
