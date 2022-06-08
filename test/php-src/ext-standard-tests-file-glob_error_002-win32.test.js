// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/glob_error_002-win32.phpt
  it("Test glob() function: error condition - pattern too long.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing glob() : error condition - pattern too long. ***\\n\";\nglob(str_repeat('x', 3000));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
