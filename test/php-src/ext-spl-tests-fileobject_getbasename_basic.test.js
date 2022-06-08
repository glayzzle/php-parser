// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fileobject_getbasename_basic.phpt
  it("SPL: SplFileObject::getBasename", function () {
    expect(parser.parseCode("<?php\n$file = __FILE__;\n$s = new SplFileObject( __FILE__ );\necho $s->getBasename();\n?>")).toMatchSnapshot();
  });
});
