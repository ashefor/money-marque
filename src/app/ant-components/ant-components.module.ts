import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule, NzSelectModule, NzInputModule, NzGridModule } from 'ng-zorro-antd';
import { NzFormModule } from 'ng-zorro-antd/form';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzSelectModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzFormModule
  ],
  exports: [
    NzButtonModule,
    NzFormModule,
    NzSelectModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzIconModule
  ]
})
export class AntComponentsModule { }
