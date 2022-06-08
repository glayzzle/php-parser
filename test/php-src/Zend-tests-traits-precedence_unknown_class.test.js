// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/precedence_unknown_class.phpt
  it("Unknown class in absolute trait precedence reference", function () {
    expect(parser.parseCode("<?php\ntrait T {}\nclass C {\n    use T {\n        WrongClass::method insteadof C;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
