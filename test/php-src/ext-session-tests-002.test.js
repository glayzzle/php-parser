// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/002.phpt
  it("session_unset() without a initialized session", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nsession_unset();\nprint \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
