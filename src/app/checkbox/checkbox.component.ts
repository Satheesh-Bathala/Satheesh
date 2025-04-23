import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkbox',
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {

  @Input() items: any[] = [];
  @Output() headerChecked = new EventEmitter<boolean>();
  @Output() rowChecked = new EventEmitter<any[]>();


  onHeaderChecked(event: any) {
    const checked = (event.target as HTMLInputElement).checked; // Explicitly cast to HTMLInputElement
    this.items.forEach(item => 
      item.selected = checked ? 'Y' : 'N'
    );
    this.headerChecked.emit(checked); // Emit the boolean value
    this.emitRowChecked();
  }
  
  onRowChecked(event: any,item: any) {
    item.selected =  (event.target as HTMLInputElement).checked ? 'Y' : 'N'; // Explicitly cast to HTMLInputElement
    this.emitRowChecked();
  }
  
  emitRowChecked() {
    const selectedItems = this.items.filter((item) => item.selected === 'Y');
    this.rowChecked.emit(selectedItems);
  }
  isAllChecked(): boolean {
    return this.items.length > 0 && this.items.every(item => item.selected === 'Y');
  }

}
