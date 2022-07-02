// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/abstract_not_declared.phpt
  it("ZE2 An abstract class must be declared abstract", function () {
    expect(parser.parseCode("<?php\nclass fail {\n    abstract function show();\n}\necho \"Done\\n\"; // shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
