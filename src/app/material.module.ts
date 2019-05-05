import {MatButtonModule, MatCheckboxModule, MatNativeDateModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatCardModule, MatNativeDateModule,  MatDatepickerModule, MatAutocompleteModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatCardModule, MatNativeDateModule , MatDatepickerModule, MatAutocompleteModule],
})
export class MaterialModule { }
