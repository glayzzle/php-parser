// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dereference_006.phpt
  it("Testing array dereference and references", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nfunction &foo(&$foo) {\n    return $foo;\n}\n$a = array(1);\nfoo($a)[0] = 2;\nvar_dump($a);\nfoo($a)[] = 3;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
