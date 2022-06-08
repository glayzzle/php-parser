// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/this_in_catch.phpt
  it("$this in catch", function () {
    expect(parser.parseCode("<?php\nclass C {\n    function foo() {\n        try {\n            throw new Exception();\n        } catch (Exception $this) {\n        }\n        var_dump($this);\n    }\n}\n$obj = new C;\n$obj->foo();\n?>")).toMatchSnapshot();
  });
});
