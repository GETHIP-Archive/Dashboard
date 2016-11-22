import { Mongo } from 'meteor/mongo';
export const student = new Mongo.Collection('student');
export const survey = new Mongo.Collection('survey');
export const response = new Mongo.Collection('response');
export const administrator = new Mongo.Collection('administrator')