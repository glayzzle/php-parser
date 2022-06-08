// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/010.phpt
  it("$session_array = explode(\";\", session_encode()); should not segfault", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n$session_array = explode(\";\", @session_encode());\nprint \"I live\\n\";\n?>")).toMatchSnapshot();
  });
});
