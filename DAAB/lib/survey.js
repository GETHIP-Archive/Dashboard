import { survey } from "/lib/collections.js";
import { student } from "/lib/collections.js";

question = new SimpleSchema({
	type: {
		type: "String"
	},
	prompt: {
		type: "String"
	},
	required: {
		type: "String"
	}
})
survey.schema = new SimpleSchema({
	title: {
		type: "String"
	},
	surveyId: {
		type: "String"
	},
	administratorId: {
		type: "String"
	},
	surveyLength: {
		type: "Integer"
	},
	question: {
		type: [question]
	}
})
