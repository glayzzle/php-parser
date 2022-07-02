// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug31177-2.phpt
  it("Bug #31177 (memory corruption because of incorrect refcounting)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n  function __construct($n=0) {\n    if($n) throw new Exception(\"new\");\n  }\n}\n$x = new foo();\ntry {\n  $y=$x->__construct(1);\n} catch (Exception $e) {\n  var_dump($x);\n}\n?>")).toMatchSnapshot();
  });
});
