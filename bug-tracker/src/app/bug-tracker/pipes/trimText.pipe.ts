import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'trimtext'
})
export class TrimTextPipe implements PipeTransform{
	transform(data : string) : string {
		return data.length < 30 ? data : data.substr(0,30) + '...';
	}
}