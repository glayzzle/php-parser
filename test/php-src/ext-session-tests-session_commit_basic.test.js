// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_commit_basic.phpt
  it("Test session_commit() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_commit() : basic functionality ***\\n\";\nvar_dump(session_start());\nvar_dump($_SESSION);\nvar_dump(session_commit());\nvar_dump($_SESSION);\nvar_dump(session_start());\nvar_dump($_SESSION);\nvar_dump(session_destroy());\nvar_dump($_SESSION);\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
