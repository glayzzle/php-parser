// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/final_abstract.phpt
  it("ZE2 A final method cannot be abstract", function () {
    expect(parser.parseCode("<?php\nclass fail {\n    final abstract function show();\n}\necho \"Done\\n\"; // Shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
