import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Message } from './message.model';
import { environment } from '../environment';

@Injectable()
export class MessageService {
	private messages: Message[] = [];
	messageIsEdit = new EventEmitter<Message>();

	constructor(private http: HttpClient) {}

	addMessage(message: Message) {
		const body = JSON.stringify(message);
		const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
		return this.http.post<any>(environment.apiUrl + '/message' + token, body, { headers: headers }).pipe(
			map(result => {
				const message = new Message(result.obj.content, result.obj.user.firstName, result.obj._id, result.obj.user._id);
				this.messages.push(message);
				return message;
			}),
			catchError(error => throwError(() => error))
		);
	}

	getMessages() {
		return this.http.get<any>(environment.apiUrl + '/message').pipe(
			map(response => {
				const messages = response.obj;
				let transformedMessages: Message[] = [];
				for (let message of messages) {
					transformedMessages.push(new Message(message.content, message.user.firstName, message._id, message.user._id));
				}
				this.messages = transformedMessages;
				return transformedMessages;
			}),
			catchError(error => throwError(() => error))
		);
	}

	editMessage(message: Message) {
		this.messageIsEdit.emit(message);
	}

	updateMessage(message: Message) {
		const body = JSON.stringify(message);
		const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
		return this.http
			.patch<any>(environment.apiUrl + '/message/' + message.messageId + token, body, { headers: headers })
			.pipe(
				map(response => response),
				catchError(error => throwError(() => error))
			);
	}

	deleteMessage(message: Message) {
		this.messages.splice(this.messages.indexOf(message), 1);
		const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
		return this.http.delete<any>(environment.apiUrl + '/message/' + message.messageId + token).pipe(
			map(response => response),
			catchError(error => throwError(() => error))
		);
	}
}
