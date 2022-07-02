// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/abstract_final.phpt
  it("ZE2 A final method cannot be abstract", function () {
    expect(parser.parseCode("<?php\nclass fail {\n    abstract final function show();\n}\necho \"Done\\n\"; // Shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
