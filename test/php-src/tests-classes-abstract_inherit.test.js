// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/abstract_inherit.phpt
  it("ZE2 A class that inherits an abstract method is abstract", function () {
    expect(parser.parseCode("<?php\nabstract class pass {\n    abstract function show();\n}\nabstract class fail extends pass {\n}\n$t = new fail();\n$t = new pass();\necho \"Done\\n\"; // Shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
