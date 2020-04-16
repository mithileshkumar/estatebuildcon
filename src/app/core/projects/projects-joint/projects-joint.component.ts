import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-joint',
  templateUrl: './projects-joint.component.html',
  styleUrls: ['./projects-joint.component.css']
})
export class ProjectsJointComponent implements OnInit {

  public jointVentures = [
    { route_name: 'green_residency', name: 'Green Residency', image: '/assets/compressed-images/joint/com_green_residency.jpg', details: '3 / 4 BHK units of different sizes. The site is situated at a secured location having a panoramic view of the Bariatu Hills. It has an easy access to the heart of the city with DAV School - Bariatu within  ...' },
    { route_name: 'green_view_heights', name: 'Green View Heights', image: '/assets/compressed-images/joint/com_green_view_heights.jpg', details: 'Green View Heights, closely resembling its name is an ongoing project in Ranchi, capital city of Jharkhand state. With a population of around 20 lakhs, the only city in the state having an airport ... ' },
    { route_name: 'skydale', name: 'Skydale', image: '/assets/compressed-images/joint/com_skydale.jpg', details: 'Where moments become memories. Can a property, elevate a town? Skydale is poised to do just that. Inspired from the finest architecture and lifestyles accross the planet.With state-of-the-art ... ' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
