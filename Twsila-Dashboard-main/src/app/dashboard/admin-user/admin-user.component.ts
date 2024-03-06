import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/_services';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.less']
})
export class AdminUserComponent implements OnInit {
  sidebarVisible2:boolean = false

  users?: any[];
  selectedUser:any

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getAllUser()
  }

  editItem(user) {
    this.selectedUser = user;
    // You can implement the logic to edit an item here
    // For demonstration purposes, let's log the item being edited
    this.sidebarVisible2 = true
    console.log('Editing:',user);
  }
getAllUser(){
  // this.accountService.getAll()
  // .pipe(first())
  // .subscribe(users => this.users = users);
  this.accountService.getAllAdmins().subscribe({
    next:(res:any)=>{
      this.users = res?.result
    },error:(err:any)=>{
      console.log(err ,'err');

    }
  })
}

  deleteUser(id: string) {
//     const user = this.users!.find(x => x.id === id);
//     user.isDeleting = true;
//     this.accountService.delete(id)
//         .pipe(first())
//         .subscribe(() => this.users = this.users!.filter(x => x.id !== id));
 }
}


