import { student } from "/lib/collections.js"
student.schema = new SimpleSchema({
	grade: {
		type: Number,
		max: 2
	},
	name: {
		type: String
	}
});