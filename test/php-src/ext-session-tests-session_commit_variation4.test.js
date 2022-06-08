// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_commit_variation4.phpt
  it("Test session_commit() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_commit() : variation ***\\n\";\nvar_dump(ini_get('session.use_strict_mode'));\nvar_dump(session_id(\"session-commit-variation4\"));\nvar_dump(session_start());\nvar_dump(session_id());\nvar_dump(session_commit());\nvar_dump(session_id());\nvar_dump(session_start());\nvar_dump(ini_get('session.use_strict_mode'));\nvar_dump(session_id());\nvar_dump(session_commit());\nvar_dump(session_id());\nvar_dump(session_start());\nvar_dump(session_id());\nvar_dump(session_commit());\nvar_dump(session_id());\nvar_dump(session_start());\nvar_dump(session_destroy());\nvar_dump(ini_get('session.use_strict_mode'));\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
