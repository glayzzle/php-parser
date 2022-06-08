// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_getchildren_basic.phpt
  it("SPL: SplFileObject::getchildren basic", function () {
    expect(parser.parseCode("<?php\n$s = new SplFileObject( __FILE__ );\nvar_dump($s->getChildren());\n?>")).toMatchSnapshot();
  });
});
