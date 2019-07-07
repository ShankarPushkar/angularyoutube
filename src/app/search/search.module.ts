import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [ParentComponent, SearchbarComponent],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
