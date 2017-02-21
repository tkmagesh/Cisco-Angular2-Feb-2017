import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'closedcount',
	pure : true
})
export class ClosedCountPipe implements PipeTransform{
	transform(data : any = []) : any {
		var result = 0;
		for(var i=0; i < data.length; i++)
			if (data[i].isClosed)
				++result;
		return result;
	}
}