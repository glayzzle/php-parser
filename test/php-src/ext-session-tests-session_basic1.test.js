// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_basic1.phpt
  it("Test basic function : variation1", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing basic session functionality : variation1 ***\\n\";\n$session_id = 'session-basic1';\nsession_id($session_id);\n$path = __DIR__;\nvar_dump(session_save_path($path));\necho \"*** Without lazy_write ***\\n\";\nvar_dump(session_id($session_id));\n$config = ['lazy_write'=>FALSE];\nvar_dump(session_start($config));\nvar_dump($config);\nvar_dump(session_write_close());\nvar_dump(session_id());\necho \"*** With lazy_write ***\\n\";\nvar_dump(session_id($session_id));\nvar_dump(session_start(['lazy_write'=>TRUE]));\nvar_dump(session_commit());\nvar_dump(session_id());\necho \"*** Cleanup ***\\n\";\nvar_dump(session_id($session_id));\nvar_dump(session_start());\nvar_dump(session_destroy());\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
