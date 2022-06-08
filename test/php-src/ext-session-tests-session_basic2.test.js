// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_basic2.phpt
  it("Test basic function : variation2", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing basic session functionality : variation2 ***\\n\";\n$session_id = 'session-basic2';\nsession_id($session_id);\n$path = __DIR__;\nvar_dump(session_save_path($path));\necho \"*** Without lazy_write ***\\n\";\nvar_dump(session_id($session_id));\nvar_dump(session_start(['lazy_write'=>FALSE]));\n$session_id_new1 = session_id();\nvar_dump($session_id_new1 !== $session_id);\nvar_dump(session_write_close());\nvar_dump(session_id());\necho \"*** With lazy_write ***\\n\";\nvar_dump(session_id($session_id));\nvar_dump(session_start(['lazy_write'=>TRUE]));\n$session_id_new2 = session_id();\nvar_dump($session_id_new1 !== $session_id_new2);\nvar_dump(session_commit());\nvar_dump(session_id());\necho \"*** Cleanup ***\\n\";\nini_set('session.use_strict_mode',0);\nvar_dump(session_id($session_id_new1));\nvar_dump(session_start());\nvar_dump(session_destroy());\nvar_dump(session_id($session_id_new2));\nvar_dump(session_start());\nvar_dump(session_destroy());\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
