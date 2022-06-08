// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_id_basic.phpt
  it("Test session_id() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_id() : basic functionality ***\\n\";\nvar_dump(session_id());\nvar_dump(session_id(\"test\"));\nvar_dump(session_id());\nvar_dump(session_id(\"1234567890\"));\nvar_dump(session_id());\n// Turn off strice mode, since it does not allow uninitialized session ID\nini_set('session.use_strict_mode',false);\nvar_dump(session_start());\nvar_dump(session_id());\nvar_dump(session_destroy());\nvar_dump(session_id());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
