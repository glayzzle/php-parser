// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_commit_variation2.phpt
  it("Test session_commit() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_commit() : variation ***\\n\";\nvar_dump(session_start());\nvar_dump($_SESSION);\nvar_dump(session_commit());\nvar_dump($_SESSION);\nvar_dump(session_start());\nvar_dump($_SESSION);\nvar_dump(session_commit());\nvar_dump($_SESSION);\nvar_dump(session_start());\nvar_dump($_SESSION);\nvar_dump(session_commit());\nvar_dump($_SESSION);\nvar_dump(session_start());\nvar_dump(session_destroy());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
