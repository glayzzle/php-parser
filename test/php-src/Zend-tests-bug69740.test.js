// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69740.phpt
  it("Bug #69740: finally in generator (yield) swallows exception in iteration", function () {
    expect(parser.parseCode("<?php\nfunction generate() {\n    try {\n        yield 1;\n        yield 2;\n    } finally {\n        echo \"finally\\n\";\n    }\n}\nforeach (generate() as $i) {\n    echo $i, \"\\n\";\n    throw new Exception();\n}\n?>")).toMatchSnapshot();
  });
});
