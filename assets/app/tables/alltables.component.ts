import { type ChangeDetectorRef, Component, type OnDestroy, type OnInit } from '@angular/core';
import type { FormGroup } from '@angular/forms';
import $ from 'jquery';
import { SlideInOutAnimation } from '../animation';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../data.service';

@Component({
	selector: 'all-tables',
	templateUrl: './alltables.component.html',
	styleUrls: ['./alltables.component.scss'],
	animations: [SlideInOutAnimation],
	standalone: false,
})
export class AllTablesComponent implements OnInit, OnDestroy {
	animationState = 'out';
	myForm: FormGroup;
	data: any;
	isLoading: boolean = true;

	interval: any;

	_postsArray: any = {};

	constructor(
		private authService: AuthService,
		public dataService: DataService,
		private cdr: ChangeDetectorRef
	) {
		// this.getData('/api/data');

		$(document).ready(() => {
			$('.btn-view').on('click', function () {
				$('.all-buttons-row').slideToggle();
				$(this).toggleClass('view-hide');
				if ($(this).hasClass('view-hide')) {
					$(this).text('Hide Table Menu');
					$('.all-buttons-row').css('display', 'flex');
				} else {
					$(this).text('View Table Menu');
				}
			});
		});
		// if (window.location.href.indexOf('alltables') == -1) {
		//      location.reload(true);
		// }
	}

	ngOnInit(): void {
		console.log('📋 AllTables component initialized');
		console.log('🎯 allTable flag:', this.dataService.allTable);
		console.log('📦 Initial dataService.data:', this.dataService.data);

		// Check if data already exists (pre-fetched at app level)
		if (this.dataService.data && Object.keys(this.dataService.data).length > 0) {
			console.log('✨ Data already available!');
			this.isLoading = false;
			this.cdr.detectChanges();
		} else {
			// Fetch data if not already available
			this.dataService.fetchData();

			// Hide loading state once data arrives
			setTimeout(() => {
				this.isLoading = false;
				this.cdr.detectChanges();
			}, 1000);
		}

		// Set up auto-refresh every 5 seconds to keep data updated
		this.interval = setInterval(() => {
			this.dataService.fetchData();
			this.cdr.detectChanges();
		}, 5000);
	}

	ngOnDestroy(): void {
		// Clean up interval when component is destroyed
		if (this.interval) {
			clearInterval(this.interval);
		}
	}

	isLoggedIn() {
		return this.authService.isLoggedIn();
	}

	toggleShowDiv(divName: string) {
		if (divName === 'ab-table') {
			console.log(this.animationState);
			this.animationState = this.animationState === 'out' ? 'in' : 'out';
			console.log(this.animationState);
		}
	}
}
