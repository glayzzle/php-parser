// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dereference_009.phpt
  it("Testing array dereference with references", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n$a = array();\nfunction &a() {\n    return $GLOBALS['a'];\n}\nvar_dump($h =& a());\n$h[] = 1;\nvar_dump(a()[0]);\n$h[] = array($h);\nvar_dump(a()[1][0][0]);\n?>")).toMatchSnapshot();
  });
});
