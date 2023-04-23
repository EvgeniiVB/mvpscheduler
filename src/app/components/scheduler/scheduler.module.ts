import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule } from 'devextreme-angular';
import { SchedulerComponent } from './scheduler.component';
import { DxSchedulerModule } from 'devextreme-angular';

@NgModule({
  imports: [CommonModule, DxButtonModule, DxSchedulerModule],
  exports: [SchedulerComponent, DxSchedulerModule],
  declarations: [SchedulerComponent],
})
export class SchedulerModule {}
