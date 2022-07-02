// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/access_modifiers_013.phpt
  it("Prevent abstract and final in the same class declaration", function () {
    expect(parser.parseCode("<?php\nfinal abstract class C {\n    private function priv() { }\n}\n?>")).toMatchSnapshot();
  });
});
