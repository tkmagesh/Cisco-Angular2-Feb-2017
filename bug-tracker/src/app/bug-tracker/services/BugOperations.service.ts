import { IBug } from '../models/IBug';

export class BugOperations{
	createNew(bugName : string) : IBug{
		return {
			name : bugName,
			isClosed : false
		}
	}

	toggle(bug : IBug) : IBug{
		return {
			name : bug.name,
			isClosed : !bug.isClosed
		};
	}
}