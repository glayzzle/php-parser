// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71470.phpt
  it("Bug #71470: Leaked 1 hashtable iterators", function () {
    expect(parser.parseCode("<?php\n$array = [1, 2, 3];\nforeach ($array as &$v) {\n    die(\"foo\\n\");\n}\n?>")).toMatchSnapshot();
  });
});
