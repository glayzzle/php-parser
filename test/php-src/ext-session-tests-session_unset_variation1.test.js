// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_unset_variation1.phpt
  it("Test session_unset() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_unset() : variation ***\\n\";\nvar_dump(session_unset());\nvar_dump(session_start());\nvar_dump(session_unset());\n$_SESSION[\"foo\"] = \"Hello World!\";\nvar_dump($_SESSION);\nvar_dump(session_destroy());\nvar_dump(session_unset());\nvar_dump($_SESSION);\nvar_dump(session_unset());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
