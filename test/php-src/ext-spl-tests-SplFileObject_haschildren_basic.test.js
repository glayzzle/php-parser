// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_haschildren_basic.phpt
  it("SPL: SplFileObject::haschildren basic", function () {
    expect(parser.parseCode("<?php\n$s = new SplFileObject( __FILE__ );\nvar_dump($s->hasChildren());\n?>")).toMatchSnapshot();
  });
});
