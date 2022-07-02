// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/error_005.phpt
  it("Trying to use a final class as trait", function () {
    expect(parser.parseCode("<?php\nfinal class abc {\n}\nclass A {\n    use abc;\n}\n?>")).toMatchSnapshot();
  });
});
