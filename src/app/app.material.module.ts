import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule

} from '@angular/material';

@NgModule({
    imports: [MatButtonModule,
        MatCheckboxModule,
        MatSliderModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatTableModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    exports: [MatButtonModule,
        MatCheckboxModule,
        MatSliderModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatTableModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    
})
export class MaterialModule { }