import { Component, OnInit } from "@angular/core";
import { CounterService } from "./counter.service";
import { UsersService } from "./users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [],
})
export class AppComponent implements OnInit {
  // activeUsers: string[] = [];
  // inactiveUsers: string[] = [];
  constructor(private userService: UsersService) {}

  // activeUsers = ["Max", "Anna"];
  // inactiveUsers = ["Chris", "Manu"];
  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }
  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
  ngOnInit() {
    // this.activeUsers = this.userService.activeUsers;
    // this.inactiveUsers = this.userService.inactiveUsers;
  }
}
