// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/016.phpt
  it("invalid session.save_path should not cause a segfault", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nsession_start();\n$HTTP_SESSION_VARS[\"test\"] = 1;\nsession_write_close();\nprint \"I live\\n\";\n?>")).toMatchSnapshot();
  });
});
