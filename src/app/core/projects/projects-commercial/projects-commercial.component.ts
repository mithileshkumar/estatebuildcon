import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-commercial',
  templateUrl: './projects-commercial.component.html',
  styleUrls: ['./projects-commercial.component.css']
})
export class ProjectsCommercialComponent implements OnInit {
  public commercial = [
    { route_name: 'estate_plaza', name: 'Estate Plaza', image: '/assets/compressed-images/commercial/com_estate_plaza.jpg', details: 'Estate Plaza is an extremely attractive G+7 commercial project. With a construction area of about 1.25 Lakh SqF ...' },
    { route_name: 'mangal_tower', name: 'Mangal Tower', image: '/assets/compressed-images/commercial/com_mangal_tower.jpg', details: 'Mangal tower a G+6 floors commercial project was completed in 2008. The building holds shop spaces in the ground ...' },
    { route_name: 'rs_tower', name: 'R S Tower', image: '/assets/compressed-images/commercial/com_rs_tower.jpg', details: 'RS Tower is a G+7 commercial project holding 41 shops and 25 offices. Double basement parking provides for hassle free ... ' },
    { route_name: 'estate_dhanguru', name: 'Estate Dhanguru', image: '/assets/compressed-images/commercial/com_estate_dhanguru.jpg', details: 'Estate Dhanguru has 19 spacious 3-BHK flats, each worthy of being associated with a gem. The flats  ...' },
  ]
  constructor() { }

  ngOnInit() {
  }

}
