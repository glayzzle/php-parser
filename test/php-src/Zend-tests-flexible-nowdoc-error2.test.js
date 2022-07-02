// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-nowdoc-error2.phpt
  it("Flexible nowdoc syntax 2: mixing spaces and tabs in body", function () {
    expect(() => parser.parseCode("<?php\necho <<<'END'\n    \ta\n    \tb\n    \tc\n     END;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
