import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-sider-bar',
  templateUrl: './admin-sider-bar.component.html',
  styleUrls: ['./admin-sider-bar.component.css']
})
export class AdminSiderBarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit(): void {
  }

}
