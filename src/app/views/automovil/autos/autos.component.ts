import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RowComponent, ColComponent, CardComponent, CardBodyComponent, CardHeaderComponent, FormControlDirective, FormDirective, FormLabelDirective, ButtonDirective, TextColorDirective, FormSelectDirective, TableActiveDirective, TableColorDirective, TableDirective } from '@coreui/angular';


@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, FormControlDirective,
    CardBodyComponent, ReactiveFormsModule, FormSelectDirective,FormsModule, FormDirective,
     FormLabelDirective,TableDirective, TableColorDirective, TableActiveDirective, FormControlDirective,ButtonDirective,TextColorDirective,NgStyle],
    templateUrl: './autos.component.html',
  styleUrl: './autos.component.scss'
  })
export class AutosComponent {

}
