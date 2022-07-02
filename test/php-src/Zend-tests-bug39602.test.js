// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug39602.phpt
  it("Bug #39602 (Invalid session.save_handler crashes PHP)", function () {
    expect(parser.parseCode("<?php\nini_set(\"session.save_handler\",\"files\");\n$x = new stdClass();\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
