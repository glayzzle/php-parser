// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug21399.phpt
  it("Bug #21399 (strtotime() request for \"YYYYMMDDhhmmss [ZZZ]\")", function () {
    expect(parser.parseCode("<?php\n    echo gmdate(\"Y-m-d H:i:s\", strtotime(\"20050620091407 GMT\"));\n?>")).toMatchSnapshot();
  });
});
