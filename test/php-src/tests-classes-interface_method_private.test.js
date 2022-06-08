// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interface_method_private.phpt
  it("ZE2 An interface method cannot be private", function () {
    expect(parser.parseCode("<?php\ninterface if_a {\n    abstract private function err();\n}\n?>")).toMatchSnapshot();
  });
});
