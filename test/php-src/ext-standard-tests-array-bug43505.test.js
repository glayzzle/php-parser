// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug43505.phpt
  it("Bug #43505 (Assign by reference bug)", function () {
    expect(parser.parseCode("<?php\nclass Test implements Countable {\n    #[ReturnTypeWillChange]\n    public function count() {\n        return $some;\n    }\n}\n$obj = new Test();\n$a = array();\n$b =& $a['test'];\nvar_dump($a);\n$t = count($obj);\n$a = array();\n$b =& $a['test'];\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
