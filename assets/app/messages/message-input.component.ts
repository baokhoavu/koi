import { Component, type OnInit } from '@angular/core';
import type { NgForm } from '@angular/forms';
import { Message } from './message.model';
import type { MessageService } from './message.service';

@Component({
	selector: 'app-message-input',
	templateUrl: './message-input.component.html',
	standalone: false,
})
export class MessageInputComponent implements OnInit {
	message: Message;

	constructor(private messageService: MessageService) {}

	onSubmit(form: NgForm) {
		if (this.message) {
			// Edit
			this.message.content = form.value.content;
			this.messageService.updateMessage(this.message).subscribe((result) => console.log(result));
			this.message = null;
		} else {
			// Create
			const message = new Message(form.value.content, 'Max');
			this.messageService.addMessage(message).subscribe(
				(data) => console.log(data),
				(error) => console.error(error)
			);
		}
		form.resetForm();
	}

	onClear(form: NgForm) {
		this.message = null;
		form.resetForm();
	}

	ngOnInit() {
		this.messageService.messageIsEdit.subscribe((message: Message) => (this.message = message));
	}
}
