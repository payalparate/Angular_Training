import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Users } from '../modal/users';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(private router: Router,public rs: DataService) { }

    ngOnInit(): void {
    this.rs.getUsers().subscribe((response)=>{
      this.users=response;
    })
  }

  logout(){
  this.router.navigateByUrl('/login');
}

  Book_title:any;
 
  users:Users[]=[];

  

  Search(){
    if(this.Book_title=="" ){
      this.ngOnInit();
    }else{
      this.users= this.users.filter(res=>{
        return res.Book_title.toLocaleLowerCase().match(this.Book_title.toLocaleLowerCase()); 
      })
    }
  }
  deleteRow(val){
    if(confirm("Are you sure to return?")){
    this.rs.deleteUser(val).subscribe(data =>{
    });
    this.rs.getUsers().subscribe((response) => {
      this.users = response;
    })}
  }
 
  update(id){
    this.router.navigate(['/update',id]);
  }
  add(users){
    this.router.navigate(['/create',users]);
  }
  get(id){
    alert("Book successfully issued!!");
}

}

