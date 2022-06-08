// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug80184.phpt
  it("Bug #80184: Complex expression in while / if statements resolves to false incorrectly", function () {
    expect(parser.parseCode("<?php\n$callbacks = [\n\tfunction () { echo \"First item!\\n\"; },\n\tfunction () { echo \"Second item!\\n\"; },\n\tfunction () { echo \"Third item!\\n\"; },\n\tfunction () { echo \"Fourth item!\\n\"; },\n];\nwhile ($callback = array_shift($callbacks) and ($callback() || true));\n?>")).toMatchSnapshot();
  });
});
