// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_regenerate_id_variation1.phpt
  it("Test session_regenerate_id() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_regenerate_id() : variation ***\\n\";\nvar_dump(session_id());\nvar_dump(session_regenerate_id(TRUE));\nvar_dump(session_id());\nvar_dump(session_start());\nvar_dump(session_regenerate_id(TRUE));\nvar_dump(session_id());\nvar_dump(session_destroy());\nvar_dump(session_regenerate_id(TRUE));\nvar_dump(session_id());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
