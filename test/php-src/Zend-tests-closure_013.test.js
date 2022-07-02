// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_013.phpt
  it("Closure 013: __invoke() on temporary result", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __invoke() {\n        echo \"Hello World!\\n\";\n    }\n}\nfunction foo() {\n    return function() {\n        echo \"Hello World!\\n\";\n    };\n}\n$test = new Foo;\n$test->__invoke();\n$test = foo();\n$test->__invoke();\n$test = foo()->__invoke();\n?>")).toMatchSnapshot();
  });
});
