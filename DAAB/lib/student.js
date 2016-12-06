import { student } from "/lib/collections.js"
student.schema = new SimpleSchema({
	grade: {
		type: "Integer",
		max: 2
	},
	name: {
		type: "String"
	},
	accountId: {
		type: "String"
	}
});