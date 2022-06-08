// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug72940.phpt
  it("Bug #72940 - SID always defined", function () {
    expect(parser.parseCode("<?php\nob_start();\nini_set('session.use_strict_mode', 0);\nini_set('session.use_cookies', 1);\nini_set('session.use_only_cookies', 0);\nsession_start();\nvar_dump(session_id(), SID);\nsession_destroy();\nini_set('session.use_strict_mode', 0);\nini_set('session.use_cookies', 0);\nini_set('session.use_only_cookies', 0);\nsession_start();\nvar_dump(session_id(), SID);\nsession_destroy();\n?>")).toMatchSnapshot();
  });
});
