// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fileobject_getmaxlinelen_basic.phpt
  it("SPL: SplFileObject::getMaxLineLen()", function () {
    expect(parser.parseCode("<?php\n$s = new SplFileObject( __FILE__ );\n$s->setMaxLineLen( 7 );\necho $s->getMaxLineLen();\n?>")).toMatchSnapshot();
  });
});
