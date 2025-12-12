import { Component, type OnInit } from '@angular/core';
import type { NgForm } from '@angular/forms';
import { SanitizationService } from '../core/sanitization.service';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
	selector: 'app-message-input',
	templateUrl: './message-input.component.html',
	standalone: false,
})
export class MessageInputComponent implements OnInit {
	message: Message;

	constructor(
		private messageService: MessageService,
		private sanitizationService: SanitizationService
	) {}

	onSubmit(form: NgForm) {
		// Sanitize message content
		const sanitizedContent = this.sanitizationService.sanitizeTextContent(form.value.content, 1000);

		// Check for malicious content
		if (this.sanitizationService.containsMaliciousContent(form.value.content)) {
			console.error('Message contains potentially malicious content');
			form.resetForm();
			return;
		}

		if (!sanitizedContent.trim()) {
			console.error('Message cannot be empty');
			form.resetForm();
			return;
		}

		if (this.message) {
			// Edit
			this.message.content = sanitizedContent;
			this.messageService.updateMessage(this.message).subscribe();
			this.message = null;
		} else {
			// Create
			const message = new Message(sanitizedContent, 'Max');
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
