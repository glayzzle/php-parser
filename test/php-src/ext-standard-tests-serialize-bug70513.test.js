// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug70513.phpt
  it("Bug #70513: GMP Deserialization Type Confusion Vulnerability", function () {
    expect(parser.parseCode("<?php\nclass obj\n{\n    var $ryat;\n    function __wakeup()\n    {\n        $this->ryat = 1;\n    }\n}\n$obj = new stdClass;\n$obj->aa = 1;\n$obj->bb = 2;\n$inner = 's:1:\"1\";a:3:{s:2:\"aa\";s:2:\"hi\";s:2:\"bb\";s:2:\"hi\";i:0;O:3:\"obj\":1:{s:4:\"ryat\";R:2;}}';\n$exploit = 'a:1:{i:0;C:3:\"GMP\":'.strlen($inner).':{'.$inner.'}}';\n$x = unserialize($exploit);\nvar_dump($x);\nvar_dump($obj);\n?>")).toMatchSnapshot();
  });
});
