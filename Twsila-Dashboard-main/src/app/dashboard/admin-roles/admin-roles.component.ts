import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '@app/_services';

@Component({
  selector: 'app-admin-roles',
  templateUrl: './admin-roles.component.html',
  styleUrls: ['./admin-roles.component.less']
})
export class AdminRolesComponent implements OnInit {

  @Input() adminID:any;
  roles:any[]
  constructor(private accontService:AccountService) { }

  ngOnInit(): void {
    this.getAdminRoles(this.adminID)
  }

  getAdminRoles(adminId:any){
    this.accontService.getAdminRoles(adminId).subscribe({
      next:(res:any)=>{
        console.log(res,'eee');
        this.roles = res?.result
      },error:(err:any)=>{
        console.log('Error:',err);
      }
    })
  }
}
