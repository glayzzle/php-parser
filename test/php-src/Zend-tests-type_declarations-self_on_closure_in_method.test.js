// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/self_on_closure_in_method.phpt
  it("self return type on closure in a method", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function test() {\n        return function() : self {\n            return $this;\n        };\n    }\n}\nvar_dump((new A)->test()());\n?>")).toMatchSnapshot();
  });
});
