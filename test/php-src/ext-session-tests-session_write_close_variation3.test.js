// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_write_close_variation3.phpt
  it("Test session_start() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_write_close() : variation ***\\n\";\nvar_dump($_SESSION);\nvar_dump(session_write_close());\nvar_dump($_SESSION);\nvar_dump(session_start());\nvar_dump(session_destroy());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
