// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/013.phpt
  it("redefining SID should not cause warnings", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nsession_id(\"test013\");\nsession_start();\nsession_destroy();\nsession_id(\"test013-2\");\nsession_start();\nsession_destroy();\nprint \"I live\\n\";\n?>")).toMatchSnapshot();
  });
});
