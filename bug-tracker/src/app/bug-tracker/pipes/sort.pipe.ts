import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'sort'
})
export class SortPipe implements PipeTransform{
	transform(data : Array<any> = [], sortBy : string = '', isDescending : boolean = false) : Array<any> {
		if (!sortBy) return data;
		var comparer = getComparerFor(sortBy);
		if (isDescending)
			comparer = getDescendingComparer(comparer);

		return data.sort(comparer)
	}
}

function getComparerFor(attrName : string) : IComparer {
	return function comparerFn (item1 : any, item2 : any) : number {
		if (item1[attrName] < item2[attrName]) return -1;
		if (item1[attrName] > item2[attrName]) return 1;
		return 0;
	}
}

function getDescendingComparer(comparerFn : IComparer ) : IComparer{
	return function descendingComparerFn ( item1 : any, item2 : any) : number {
		return comparerFn(item1, item2) * -1;
	}
}

interface IComparer{
	(item1 : any, item2 : any) : number
}