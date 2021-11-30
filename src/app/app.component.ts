import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrequalifictaionWidgetComponent } from './prequalifictaion-widget/prequalifictaion-widget.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prequalification-Widget';


constructor(public dialog: MatDialog) { }

openDialog(): void {
  const dialogRef = this.dialog.open(PrequalifictaionWidgetComponent, {
    width: '89vw',
    maxWidth:'89vw',
    height:'100%',

    position:{right:'0'}
   // data: { name: this.name, color: this.color }
  });

  dialogRef.afterClosed().subscribe(res => {
  //  this.color = res;
  console.log('Closed Dialog')
  });
}
}
