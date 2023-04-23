import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerComponent } from './scheduler.component';
import { DxSchedulerModule } from 'devextreme-angular/ui/scheduler';

@NgModule({
  imports: [CommonModule, DxSchedulerModule],
  exports: [SchedulerComponent, DxSchedulerModule],
  declarations: [SchedulerComponent],
})
export class SchedulerModule {}
