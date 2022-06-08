// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_variation6.phpt
  it("Test session_set_save_handler() function : test lazy_write", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_save_handler() : test write short circuit ***\\n\";\nrequire_once \"save_handler.inc\";\n$path = __DIR__ . '/session_set_save_handler_variation6';\n@mkdir($path);\nsession_save_path($path);\nsession_set_save_handler(\"open\", \"close\", \"read\", \"write\", \"destroy\", \"gc\", \"create_sid\", \"validate_sid\", \"update\");\nsession_start();\n$session_id = session_id();\n$_SESSION[\"Blah\"] = \"Hello World!\";\n$_SESSION[\"Foo\"] = FALSE;\n$_SESSION[\"Guff\"] = 1234567890;\nvar_dump($_SESSION);\nsession_write_close();\nsession_unset();\nvar_dump($_SESSION);\necho \"Starting session again..!\\n\";\nsession_id($session_id);\nsession_set_save_handler(\"open\", \"close\", \"read\", \"write\", \"destroy\", \"gc\", \"create_sid\", \"validate_sid\", \"update\");\nsession_start();\nvar_dump($_SESSION);\n$_SESSION['Bar'] = 'Foo';\nsession_write_close();\necho \"Starting session again..!\\n\";\nsession_id($session_id);\nsession_set_save_handler(\"open\", \"close\", \"read\", \"write\", \"destroy\", \"gc\", \"create_sid\", \"validate_sid\", \"update\");\nsession_start();\nvar_dump($_SESSION);\n// $_SESSION should be the same and should skip write()\nsession_write_close();\necho \"Cleanup\\n\";\nsession_start();\nsession_destroy();\nob_end_flush();\nrmdir($path);\n?>")).toMatchSnapshot();
  });
});
