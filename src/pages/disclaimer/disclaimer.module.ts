import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisclaimerPage } from './disclaimer';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DisclaimerPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DisclaimerPage),
  ],
})
export class DisclaimerPageModule {}
