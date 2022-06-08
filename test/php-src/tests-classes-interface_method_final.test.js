// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interface_method_final.phpt
  it("ZE2 An interface method cannot be final", function () {
    expect(parser.parseCode("<?php\nclass if_a {\n    abstract final function err();\n}\n?>")).toMatchSnapshot();
  });
});
