// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_status_disabled.phpt
  it("Test session_status() function : disabled", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing session_status() : disabled\\n\";\nvar_dump(session_status() == PHP_SESSION_DISABLED);\n?>")).toMatchSnapshot();
  });
});
