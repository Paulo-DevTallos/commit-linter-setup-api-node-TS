import Person from ".";

it("Should test somethig", () => {
  const person = new Person();

  console.log("teste");

  expect(person.sayMyName()).toBe("Paulo Sérgio");
});
