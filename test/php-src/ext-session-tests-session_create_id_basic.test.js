// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_create_id_basic.phpt
  it("Test session_create_id() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_create_id() : basic functionality ***\\n\";\n// No session\nvar_dump(session_create_id());\nvar_dump(session_create_id('ABCD'));\nini_set('session.use_strict_mode', true);\n$sid = session_create_id('XYZ');\nvar_dump($sid);\nvar_dump(session_id($sid));\nsession_start();\nvar_dump(session_id());\nvar_dump(session_id() === $sid);\nsession_destroy();\nini_set('session.use_strict_mode', false);\n$sid = session_create_id('XYZ');\nvar_dump($sid);\nvar_dump(session_id($sid));\nsession_start();\nvar_dump(session_id());\nvar_dump(session_id() === $sid);\nsession_destroy();\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
