// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/indirect_method_call_001.phpt
  it("Testing indirect method call and exceptions", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public function __construct() {\n        throw new Exception('foobar');\n    }\n}\ntry {\n    $X = (new foo)->Inexistent(3);\n} catch (Exception $e) {\n    var_dump($e->getMessage()); // foobar\n}\n?>")).toMatchSnapshot();
  });
});
