// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69174.phpt
  it("Bug #69174 (leaks when unused inner class use traits precedence)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    class C1 {\n        use T1, T2 {\n            T1::foo insteadof T2;\n            T1::bar insteadof T2;\n        }\n    }\n}\n?>\n==DONE==")).toMatchSnapshot();
  });
});
