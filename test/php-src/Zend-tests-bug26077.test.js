// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug26077.phpt
  it("Bug #26077 (Memory leaks when creating an instance of an object)", function () {
    expect(parser.parseCode("<?php\nclass foo {} new foo();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
