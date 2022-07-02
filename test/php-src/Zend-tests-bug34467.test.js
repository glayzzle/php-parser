// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug34467.phpt
  it("Bug #34467 (foreach + __get + __set incosistency)", function () {
    expect(parser.parseCode("<?php\nclass abc {\n    private $arr;\n    function __set ($key, $value) {\n    $this->arr[$key] = $value;\n  }\n    function __get ($key) {\n      return $this->arr[$key];\n    }\n}\n$abc = new abc();\nforeach (array (1,2,3) as $abc->k => $abc->v) {\n    var_dump($abc->k,$abc->v);\n}\n?>")).toMatchSnapshot();
  });
});
