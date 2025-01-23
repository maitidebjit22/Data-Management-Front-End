import { Component,OnInit } from '@angular/core';
import { ImportUserComponent } from '../../import-user/import-user.component';
import { MatDialog } from "@angular/material/dialog";
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
export interface PeriodicElement {
  period: string;
  inst_sector: string;
  inst_sector_code: string;
  actions:string;
  sNA08TRANS:string;
  descriptor:string;
  asset_liability_code:String;
  values:string;

 
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userFilter:any={values:''};
    users:any = [];
    p:any;
    displayedColumns: string[] = [
      'period', 
      'inst_sector', 
      'inst_sector_code',
      'descriptor',
      'sNA08TRANS',
      'asset_liability_code',
      'values',
      'actions'];
    dataSource :any;
  
    constructor(
      public dialog: MatDialog,
      private apiService: ApiService,
      private router: Router,
      private _auth: AuthService,
    ) { }
  
    ngOnInit(): void {
      this.getUsers();
    }
  
    getUsers() {
      this.apiService.getUsers().subscribe(
        (res: any) => {
          if (res.status == 200) {
  
            const ELEMENT_DATA: PeriodicElement[] = res.data;
            this.dataSource = ELEMENT_DATA;
  
          } else {
            alert("Something Went Wrong");
          }
        },
      
      );
    }
  
    importUser() {
  
      const dialogRef = this.dialog.open(ImportUserComponent, {
        minWidth: '300px',
        minHeight: '300px',
        data: {},
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result != undefined) {
          alert(result.msg);
          this.getUsers();
        }
      });
    }
    exportUser() {
      this.apiService.exportUser().subscribe(
        (res: any) => {
          if(res.status == 200){
              const a = document.createElement("a");
              a.href = "data:text/csv," + res.body;
              let filename = "users";
              a.setAttribute("download", filename + ".csv");
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
          }
          else{
            alert("Something went Wrong")
          }
        },
       
      );
    }

  
   
  }
  
  
  

