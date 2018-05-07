import { Component, OnInit ,} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute ,Router,Params } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  movieName: string;
  constructor(
    private router: Router 
  ) { }

  ngOnInit() {
  }

  public search(){
    this.router.navigate(['/search/', this.movieName]);
  }
}
