// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/abstract_derived.phpt
  it("ZE2 A derived class with an abstract method must be abstract", function () {
    expect(parser.parseCode("<?php\nclass base {\n}\nclass derived extends base {\n    abstract function show();\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
