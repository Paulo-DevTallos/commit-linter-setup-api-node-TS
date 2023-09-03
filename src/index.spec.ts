import Person from ".";

it("Should test somethig", () => {
  const person = new Person();

  console.log(person);

  expect(person.sayMyName()).toBe("Paulo Sérgio");
});
