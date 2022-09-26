import { Component, OnInit } from '@angular/core';
import {TourService} from "../../service/tour.service";
import {Tour} from "../../models/Tour";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  tours:Tour[]=[]

  constructor(private tourservice:TourService) { }

  ngOnInit(): void {
    this.tourservice.getall().subscribe((data)=>{
      this.tours=data
    })
  }

}
