import type { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const SecurityValidators = {
	noMaliciousContent: (): ValidatorFn => {
		return (control: AbstractControl): ValidationErrors | null => {
			if (!control.value) return null;
			const maliciousPatterns = [
				/<script/i,
				/javascript:/i,
				/on\w+\s*=/i,
				/<iframe/i,
				/<object/i,
				/<embed/i,
				/eval\(/i,
				/expression\(/i,
			];
			const hasMalicious = maliciousPatterns.some((pattern) => pattern.test(control.value));
			return hasMalicious ? { maliciousContent: { value: control.value } } : null;
		};
	},
	strongPassword: (): ValidatorFn => {
		return (control: AbstractControl): ValidationErrors | null => {
			if (!control.value) return null;
			const errors: any = {};
			if (control.value.length < 8) errors.minLength = true;
			if (control.value.length > 128) errors.maxLength = true;
			if (!/[a-z]/.test(control.value)) errors.lowercase = true;
			if (!/[A-Z]/.test(control.value)) errors.uppercase = true;
			if (!/\d/.test(control.value)) errors.number = true;
			if (!/[!@#$%^&*(),.?":{}|<>]/.test(control.value)) errors.special = true;
			return Object.keys(errors).length > 0 ? { weakPassword: errors } : null;
		};
	},
	nameValidator: (): ValidatorFn => {
		return (control: AbstractControl): ValidationErrors | null => {
			if (!control.value) return null;
			const namePattern = /^[a-zA-Z\s'-]+$/;
			if (!namePattern.test(control.value)) return { invalidName: { value: control.value } };
			if (control.value.length < 2 || control.value.length > 50) return { nameLength: { value: control.value } };
			return null;
		};
	},
	noSqlInjection: (): ValidatorFn => {
		return (control: AbstractControl): ValidationErrors | null => {
			if (!control.value) return null;
			const sqlPatterns = [
				/(\bor\b|\band\b).*[=<>]/i,
				/union.*select/i,
				/insert.*into/i,
				/delete.*from/i,
				/drop.*table/i,
				/update.*set/i,
				/--/,
				/;.*--/,
				/\/\*.*\*\//,
			];
			const hasSqlPattern = sqlPatterns.some((pattern) => pattern.test(control.value));
			return hasSqlPattern ? { sqlInjection: { value: control.value } } : null;
		};
	},
	maxContentLength: (max: number): ValidatorFn => {
		return (control: AbstractControl): ValidationErrors | null => {
			if (!control.value) return null;
			if (control.value.length > max) return { maxContentLength: { max, actual: control.value.length } };
			return null;
		};
	},
	noHtmlTags: (): ValidatorFn => {
		return (control: AbstractControl): ValidationErrors | null => {
			if (!control.value) return null;
			const htmlPattern = /<[^>]*>/;
			if (htmlPattern.test(control.value)) return { htmlTags: { value: control.value } };
			return null;
		};
	},
	safeUrl: (): ValidatorFn => {
		return (control: AbstractControl): ValidationErrors | null => {
			if (!control.value) return null;
			const urlPattern = /^https?:\/\//i;
			if (!urlPattern.test(control.value)) return { unsafeUrl: { value: control.value } };
			if (/^(javascript|data):/i.test(control.value)) return { dangerousProtocol: { value: control.value } };
			return null;
		};
	},
};
