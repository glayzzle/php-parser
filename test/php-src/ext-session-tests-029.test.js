// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/029.phpt
  it("session_decode(); should not segfault", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nsession_decode(\"garbage data and no session started\");\nsession_decode(\"userid|s:5:\\\"mazen\\\";chatRoom|s:1:\\\"1\\\";\");\nprint \"I live\\n\";\n?>")).toMatchSnapshot();
  });
});
