// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug79413.phpt
  it("Bug #79413 (session_create_id() fails for active sessions)", function () {
    expect(parser.parseCode("<?php\nsession_start();\n$old = session_id();\n$new = session_create_id();\nvar_dump($new !== $old);\n?>")).toMatchSnapshot();
  });
});
