import Person from ".";

it("Should test somethig", () => {
  const person = new Person();

  expect(person.sayMyName()).toBe("Paulo Sérgio");
});
