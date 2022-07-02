// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/language018.phpt
  it("abstract alias", function () {
    expect(parser.parseCode("<?php\ntrait T1 {\n    function foo() {}\n}\nclass C1 {\n    use T1 {\n        T1::foo as abstract;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
