import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UploadService } from '../../upload/upload.service';

import { Router, ActivatedRoute, Params, Data, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

	uploadOriginalText: boolean;
	
	title: string;
	language: string;
	tags: string;
	
	constructor(private route: ActivatedRoute, public router: Router,
		private uploadService: UploadService, public location: Location, ) { 
		const translationID = this.route.snapshot.params['id'];
		if(translationID) {
			this.uploadOriginalText = false;
		} else {
			this.uploadOriginalText = true;
		}
	}

	ngOnInit() {
		console.log("init upload component");
	}

	fileChanged(event: any): void {
		this.uploadService.readFile(event.target.files[0], this.uploadOriginalText);
	}
	
	getCurrentScreenTitle(): string {
		if(this.uploadOriginalText) {
			return "Creating a new Post";
		} else if(!this.uploadOriginalText) {
			return "Creating a new translation for a Post"
		} else {
			return "Eye see you";
		}
	}
	
	navigate(path: string):void {
		this.router.navigate([path], {relativeTo: this.route, skipLocationChange: false});
	}
}
