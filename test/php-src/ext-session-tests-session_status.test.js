// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_status.phpt
  it("Test session_status() function : active, none", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_status() : active, none\\n\";\nvar_dump(PHP_SESSION_NONE != PHP_SESSION_ACTIVE);\nvar_dump(session_status() == PHP_SESSION_NONE);\nsession_start();\nvar_dump(session_status() == PHP_SESSION_ACTIVE);\n?>")).toMatchSnapshot();
  });
});
