// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug75396.phpt
  it("Bug #75396: Exit inside generator finally results in fatal error", function () {
    expect(parser.parseCode("<?php\n$gen = (function () {\n    yield 42;\n    try {\n        echo \"Try\\n\";\n        exit(\"Exit\\n\");\n    } finally {\n        echo \"Finally\\n\";\n    }\n})();\n$gen->send(\"x\");\n?>")).toMatchSnapshot();
  });
});
