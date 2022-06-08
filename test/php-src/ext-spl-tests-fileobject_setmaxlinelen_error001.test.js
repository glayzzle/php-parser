// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fileobject_setmaxlinelen_error001.phpt
  it("SPL: SplFileObject::setMaxLineLen error 001()", function () {
    expect(parser.parseCode("<?php\n$s = new SplFileObject( __FILE__ );\ntry {\n    $s->setMaxLineLen(-1);\n}\ncatch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
