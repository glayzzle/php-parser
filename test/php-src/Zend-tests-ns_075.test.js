// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_075.phpt
  it("075: Redefining compile-time constants", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\nconst NULL = 1;\necho NULL;\n?>")).toMatchSnapshot();
  });
});
