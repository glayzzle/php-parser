// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_id_basic2.phpt
  it("Test session_id() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_id() : basic functionality ***\\n\";\nini_set('session.sid_bits_per_chracter', 6);\nini_set('session.sid_length', 120);\nsession_start();\nvar_dump(session_id());\nsession_commit();\nini_set('session.sid_bits_per_chracter', 4);\nini_set('session.sid_length', 22);\nsession_start();\nsession_regenerate_id();\nvar_dump(session_id());\nsession_commit();\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
