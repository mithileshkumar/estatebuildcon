import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-residential',
  templateUrl: './projects-residential.component.html',
  styleUrls: ['./projects-residential.component.css']
})
export class ProjectsResidentialComponent implements OnInit {

  public residential = [
    { route_name: 'estate_eco_symphony', name: 'Estate Eco Symphony', image: '/assets/compressed-images/residential/com_estate_eco_symphony.jpg', details: 'squire historically was a title of respect accorded to men of higher social rank. Estate Esquire was built on the ideology of creating ...' },
    { route_name: 'estate_esquire', name: 'Estate Esquire', image: '/assets/compressed-images/residential/com_estate-esquire.jpg', details: 'squire historically was a title of respect accorded to men of higher social rank. Estate Esquire was built on the ideology of creating ...' },
    { route_name: 'estate_esquire2', name: 'Estate Esquire II', image: '/assets/compressed-images/residential/com_estate-esquire2.jpg', details: 'Estate Emerald has 19 spacious 3-BHK flats, each worthy of being associated with a gem. The flats are professionally designed to ... ' },
    { route_name: 'estate_emerald', name: 'Estate Emerald', image: '/assets/compressed-images/residential/com_estate_emerald.jpg', details: 'Estate Esquire II is a smaller replica of the splendor of Estate Esquire I. The apartment has 32 3-BHK flats, each of approx 1580 Sq ft ... ' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
