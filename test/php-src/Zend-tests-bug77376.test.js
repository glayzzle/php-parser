// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug77376.phpt
  it("Bug #77376 (\"undefined function\" message no longer includes namespace)", function () {
    expect(parser.parseCode("<?php\nnamespace Hello;\nWorld();\n?>")).toMatchSnapshot();
  });
});
