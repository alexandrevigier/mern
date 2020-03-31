import Person from '../models/personModel';

export const signUp = async (req, res) => {
  let person = new Person(req.body);
  var createdPerson = await person.save();

  res.json(createdPerson);
};