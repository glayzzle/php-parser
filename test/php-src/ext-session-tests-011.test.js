// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/011.phpt
  it("session_decode(); should not segfault", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n@session_decode(\"garbage data and no session started\");\n@session_decode(\"userid|s:5:\\\"mazen\\\";chatRoom|s:1:\\\"1\\\";\");\nprint \"I live\\n\";\n?>")).toMatchSnapshot();
  });
});
