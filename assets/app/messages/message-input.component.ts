import { Component, type OnInit } from '@angular/core';
import type { NgForm } from '@angular/forms';
import { Message } from './message.model';
import { MessageService } from './message.service';

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
			this.messageService.updateMessage(this.message).subscribe();
			this.message = null;
		} else {
			// Create
			const message = new Message(form.value.content, 'Max');
			this.messageService.addMessage(message).subscribe(
				() => {},
				(error) => console.error('Error adding message:', error)
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
