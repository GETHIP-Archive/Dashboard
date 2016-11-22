import { survey } from "/lib/collections.js";
import { student } from "/lib/collections.js";

survey.schema = new SimpleSchema({
	surveyId: {
		type: "String"
	},
	administratorId: {
		type: "String"
	},
	assigned: {
		type: [student]
	}
})