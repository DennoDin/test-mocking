const { expect } = require("chai");
const Ghibliator = require("../Ghibliator");
const sinon = require("sinon");
const fs = require("fs");

describe("Ghibliator", () => {
  it("should return average age of characters", () => {
    // setup
    const expected = 33;
    const delta = 1;
    // const stub = sinon.stub(Ghibliator.prototype, "getAverageAge");
    // stub.returns(10);
    const stub = sinon.stub(fs, "readFileSync");
    const unparsed = JSON.stringify([
      {
        id: "ebe40383-aad2-4208-90ab-698f00c581ab",
        name: "San",
        gender: "Female",
        age: "17",
        eye_color: "Brown",
        hair_color: "Brown",
        films: [
          "https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6",
        ],
        species:
          "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
        url:
          "https://ghibliapi.herokuapp.com/people/ebe40383-aad2-4208-90ab-698f00c581ab",
      },
      {
        id: "a10f64f3-e0b6-4a94-bf30-87ad8bc51607",
        name: "Sosuke",
        gender: "Male",
        age: "5",
        eye_color: "Brown",
        hair_color: "Brown",
        films: [
          "https://ghibliapi.herokuapp.com/films/758bf02e-3122-46e0-884e-67cf83df1786",
        ],
        species:
          "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
        url:
          "https://ghibliapi.herokuapp.com/people/a10f64f3-e0b6-4a94-bf30-87ad8bc51607",
      },
    ]);
    stub.returns(unparsed);

    // exercise
    const actual = new Ghibliator().getAverageAge();

    // assert
    expect(actual).closeTo(actual, expected, delta);

    // teardown
    stub.restore();
  });

  it("should return appearances", () => {
    // setup
    const expected = 2;
    const stub = sinon.stub(fs, "readFileSync");
    const unparsed = JSON.stringify([
      {
        id: "ebe40383-aad2-4208-90ab-698f00c581ab",
        name: "San",
        gender: "Female",
        age: "17",
        eye_color: "Brown",
        hair_color: "Brown",
        films: [
          "https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6",
        ],
        species:
          "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
        url:
          "https://ghibliapi.herokuapp.com/people/ebe40383-aad2-4208-90ab-698f00c581ab",
      },
      {
        id: "a10f64f3-e0b6-4a94-bf30-87ad8bc51607",
        name: "Sosuke",
        gender: "Male",
        age: "5",
        eye_color: "Brown",
        hair_color: "Brown",
        films: [
          "https://ghibliapi.herokuapp.com/films/758bf02e-3122-46e0-884e-67cf83df1786",
        ],
        species:
          "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
        url:
          "https://ghibliapi.herokuapp.com/people/a10f64f3-e0b6-4a94-bf30-87ad8bc51607",
      },
    ]);
    stub.returns(unparsed);

    // exerciseÍ
    const actual = new Ghibliator().appearances("San");

    // assert
    expect(actual).to.equal(actual, expected);

    // teardown
    stub.restore();
  });
});
