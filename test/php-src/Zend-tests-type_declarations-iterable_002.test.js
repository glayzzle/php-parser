// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/iterable_002.phpt
  it("iterable type#002 - Default values", function () {
    expect(parser.parseCode("<?php\nfunction foo(iterable $iterable = null) {\n    // Null should be allowed as a default value\n}\nfunction bar(iterable $iterable = []) {\n    // Array should be allowed as a default value\n}\nfunction baz(iterable $iterable = 1) {\n    // No other values should be allowed as defaults\n}\n?>")).toMatchSnapshot();
  });
});
