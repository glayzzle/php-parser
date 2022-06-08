// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/003.phpt
  it("ReflectionMethod::invoke() with base class method", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    function Test()\n    {\n        echo __METHOD__ . \"\\n\";\n    }\n}\nclass Bar extends Foo\n{\n    function Test()\n    {\n        echo __METHOD__ . \"\\n\";\n    }\n}\n$o = new Bar;\n$r = new ReflectionMethod('Foo','Test');\n$r->invoke($o);\n?>")).toMatchSnapshot();
  });
});
