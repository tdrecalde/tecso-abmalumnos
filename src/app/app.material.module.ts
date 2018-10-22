import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule,
        MatCheckboxModule,
        MatSliderModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule
    ],
    exports: [MatButtonModule,
        MatCheckboxModule,
        MatSliderModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule
    ],
})
export class MaterialModule { }