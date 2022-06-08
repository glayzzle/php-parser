// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_006.phpt
  it("Closure 006: Nested lambdas", function () {
    expect(parser.parseCode("<?php\n$getClosure = function ($v) {\n    return function () use ($v) {\n        echo \"Hello World: $v!\\n\";\n    };\n};\n$closure = $getClosure (2);\n$closure ();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
