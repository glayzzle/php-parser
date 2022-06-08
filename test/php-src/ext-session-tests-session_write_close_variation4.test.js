// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_write_close_variation4.phpt
  it("Test session_write_close() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_write_close() : variation ***\\n\";\nvar_dump(session_id(\"test\"));\nvar_dump(session_start());\nvar_dump(session_id());\nvar_dump(session_write_close());\nvar_dump(session_id());\nvar_dump(session_start());\nvar_dump(session_id());\nvar_dump(session_write_close());\nvar_dump(session_id());\nvar_dump(session_start());\nvar_dump(session_id());\nvar_dump(session_write_close());\nvar_dump(session_id());\nvar_dump(session_start());\nvar_dump(session_destroy());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
