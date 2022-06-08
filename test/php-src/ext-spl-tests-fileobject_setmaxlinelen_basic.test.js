// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fileobject_setmaxlinelen_basic.phpt
  it("SPL: SplFileObject::setMaxLineLen", function () {
    expect(parser.parseCode("<?php\n$s = new SplFileObject( __FILE__ );\n$s->setMaxLineLen( 3);\necho $s->getCurrentLine();\n?>")).toMatchSnapshot();
  });
});
