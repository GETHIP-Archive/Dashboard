import { administrator } from "/lib/collections.js"

administrator.schema = new SimpleSchema({
	administratorId: {
		type: "String"
	},
	name: {
		type: "String"
	},
	surveys: {
		type: ["String"]
	}
})