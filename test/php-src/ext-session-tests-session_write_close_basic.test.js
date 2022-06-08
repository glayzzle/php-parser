// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_write_close_basic.phpt
  it("Test session_write_close() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_write_close() : basic functionality ***\\n\";\nvar_dump(session_start());\nvar_dump($_SESSION);\nvar_dump(session_write_close());\nvar_dump($_SESSION);\nvar_dump(session_start());\nvar_dump($_SESSION);\nvar_dump(session_destroy());\nvar_dump($_SESSION);\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
