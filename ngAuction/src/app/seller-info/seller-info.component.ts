import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nga-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.css']
})
export class SellerInfoComponent implements OnInit {
  sellerID: string | null = "";

  constructor(private route: ActivatedRoute) { 
    route.paramMap.subscribe( (params) => this.sellerID = params.get('sellerID'));
  }

  ngOnInit(): void {
  }

}
