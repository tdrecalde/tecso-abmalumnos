import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatSliderModule, MatCardModule,MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSliderModule, MatCardModule, MatSidenavModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSliderModule, MatCardModule, MatSidenavModule],
})
export class MaterialModule { }