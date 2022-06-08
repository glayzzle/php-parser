// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/error_006.phpt
  it("Trying to use an abstract class as trait", function () {
    expect(parser.parseCode("<?php\nabstract class abc {\n}\nclass A {\n    use abc;\n}\n?>")).toMatchSnapshot();
  });
});
