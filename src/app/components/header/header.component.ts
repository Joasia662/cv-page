import { Component, inject } from '@angular/core';
import { WorkExpirienceComponent } from '../work-expirience/work-expirience.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(WorkExpirienceComponent);
  }

  sendEmail(){
    const mailText = "mailto:asiacepuch1@gmail.com?subject=Hello"; // add the links to body
    window.location.href = mailText;
  }
}
