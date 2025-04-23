import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule, FormsModule, CheckboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'checkboxValidations';

  users=[{id:1, name:'John', selected:'N'},
  {id:2, name:'Doe', selected:'N'}, 
  {id:3, name:'Smith', selected:'N'},
   {id:4, name:'Jane', selected:'N'},
    {id:5, name:'Emily', selected:'N'}, ]

selectedNames: string[] = [];
onHeaderChecked(isChecked:boolean){
 
this.selectedNames = isChecked ? this.users.map((user) => user.name) : [];
  // this.users.forEach((user) => {
  //   user.selected = status ? 'Y' : 'N';
  // }
}
onRowChecked(selectedItems:any[]){
  // console.log('row checkbox changed;', updated);
  this.selectedNames = selectedItems.map((item) => item.name);
  console.log('selected names:', this.selectedNames);
  // this.users.forEach((user) => {
  //   user.selected = updated.includes(user.name) ? 'Y' : 'N';
  // });
}
}
