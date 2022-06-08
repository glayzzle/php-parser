// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_gc_basic.phpt
  it("Test session_gc() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_gc() : basic functionality ***\\n\";\nvar_dump(session_gc());\nvar_dump(session_start());\nvar_dump(session_gc(), session_gc() >= -1);\nvar_dump(session_destroy());\nvar_dump(session_id());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
