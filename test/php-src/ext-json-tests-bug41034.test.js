// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug41034.phpt
  it("Bug #41034 (json_encode() ignores null byte started keys in arrays)", function () {
    expect(parser.parseCode("<?php\necho json_encode(array(0, \"\\0ab\"=>1, \"\\0null-prefixed value\"));\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
