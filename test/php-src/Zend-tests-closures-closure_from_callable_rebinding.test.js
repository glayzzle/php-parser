// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closures/closure_from_callable_rebinding.phpt
  it("Testing Closure::fromCallable() functionality: Rebinding", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function method() {\n        var_dump($this);\n    }\n}\nclass B {\n}\n$fn = Closure::fromCallable([new A, 'method']);\n$fn->call(new B);\n?>")).toMatchSnapshot();
  });
});
