// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug68063.phpt
  it("Bug #68063 (Empty session IDs do still start sessions)", function () {
    expect(parser.parseCode("<?php\n// Empty session ID may happen by browser bugs\n// Could also be set with a cookie like \"PHPSESSID=; path=/\"\nsession_id('');\n// Start the session with empty string should result in new session ID\nvar_dump(session_start());\n// Returns newly created session ID\nvar_dump(session_id());\n?>")).toMatchSnapshot();
  });
});
