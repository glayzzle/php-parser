// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_011.phpt
  it("Closure 011: Lexical copies not static in closure", function () {
    expect(parser.parseCode("<?php\n$i = 1;\n$lambda = function () use ($i) {\n    return ++$i;\n};\n$lambda();\necho $lambda().\"\\n\";\n//early prototypes gave 3 here because $i was static in $lambda\n?>")).toMatchSnapshot();
  });
});
