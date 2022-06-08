// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_variation5.phpt
  it("Test session_set_save_handler() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\nfunction noisy_gc($maxlifetime) {\n    echo(\"GC [\".$maxlifetime.\"]\\n\");\n    echo gc($maxlifetime).\" deleted\\n\";\n    return true;\n}\necho \"*** Testing session_set_save_handler() : variation ***\\n\";\nrequire_once \"save_handler.inc\";\n$path = __DIR__ . '/session_set_save_handler_variation5';\n@mkdir($path);\nvar_dump(session_save_path($path));\necho \"*** Without lazy_write ***\\n\";\nvar_dump(session_set_save_handler(\"open\", \"close\", \"read\", \"write\", \"destroy\", \"noisy_gc\", \"create_sid\", \"validate_sid\", \"update\"));\nvar_dump(session_start(['lazy_write'=>FALSE]));\n$session_id = session_id();\nvar_dump(session_id());\nvar_dump(session_write_close());\nvar_dump(session_id());\necho \"*** With lazy_write ***\\n\";\nvar_dump(session_id($session_id));\nvar_dump(session_set_save_handler(\"open\", \"close\", \"read\", \"write\", \"destroy\", \"noisy_gc\", \"create_sid\", \"validate_sid\", \"update\"));\nvar_dump(session_start(['lazy_write'=>TRUE]));\nvar_dump(session_commit());\nvar_dump(session_id());\necho \"*** Cleanup ***\\n\";\nvar_dump(session_id($session_id));\nvar_dump(session_start());\nvar_dump(session_destroy());\nob_end_flush();\nrmdir($path);\n?>")).toMatchSnapshot();
  });
});
