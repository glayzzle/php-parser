// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/tentative_type_early_binding.phpt
  it("Check that both warning and unresolved during early binding is handled", function () {
    expect(parser.parseCode("<?php\nclass Test extends SplObjectStorage {\n    function valid() {}\n    function current(): Unknown {}\n}\n?>")).toMatchSnapshot();
  });
});
