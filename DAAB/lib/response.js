import { response } from "/lib/collections.js"

response.schema = new SimpleSchema({
	studentId: {
		type: "String"
	},
	surveyId: {
		type: "String"
	},
	date: {
		type: "Date"
	},
	answer: {
		type: "Object"
	}
})
