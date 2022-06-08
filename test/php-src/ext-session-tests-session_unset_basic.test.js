// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_unset_basic.phpt
  it("Test session_unset() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_unset() : basic functionality ***\\n\";\nvar_dump(session_start());\n$_SESSION[\"foo\"] = \"Hello World!\";\nvar_dump($_SESSION);\nvar_dump(session_unset());\nvar_dump($_SESSION);\nvar_dump(session_destroy());\nvar_dump($_SESSION);\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
