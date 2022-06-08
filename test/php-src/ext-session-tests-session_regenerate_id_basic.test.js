// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_regenerate_id_basic.phpt
  it("Test session_regenerate_id() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_regenerate_id() : basic functionality ***\\n\";\nvar_dump(session_id());\nvar_dump(session_regenerate_id());\nvar_dump(session_id());\nvar_dump(session_start());\nvar_dump(session_regenerate_id());\nvar_dump(session_id());\nvar_dump(session_destroy());\nvar_dump(session_regenerate_id());\nvar_dump(session_id());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
