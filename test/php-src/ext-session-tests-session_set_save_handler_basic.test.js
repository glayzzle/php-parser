// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_basic.phpt
  it("Test session_set_save_handler() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_save_handler() : basic functionality ***\\n\";\nrequire_once \"save_handler.inc\";\nvar_dump(session_module_name());\nvar_dump(session_module_name(FALSE));\nvar_dump(session_module_name(\"blah\"));\nvar_dump(session_module_name(\"foo\"));\n$path = __DIR__ . '/session_set_save_handler_basic';\n@mkdir($path);\nsession_save_path($path);\nsession_set_save_handler(\"open\", \"close\", \"read\", \"write\", \"destroy\", \"gc\");\nsession_start();\n$session_id = session_id();\n$_SESSION[\"Blah\"] = \"Hello World!\";\n$_SESSION[\"Foo\"] = FALSE;\n$_SESSION[\"Guff\"] = 1234567890;\nvar_dump($_SESSION);\nsession_write_close();\nsession_unset();\nvar_dump($_SESSION);\necho \"Starting session again..!\\n\";\nsession_id($session_id);\nsession_set_save_handler(\"open\", \"close\", \"read\", \"write\", \"destroy\", \"gc\");\nsession_start();\nvar_dump($_SESSION);\n$_SESSION['Bar'] = 'Foo';\nsession_write_close();\necho \"Garbage collection..\\n\";\nsession_id($session_id);\nsession_start();\nvar_dump(session_gc());\nsession_write_close();\necho \"Cleanup..\\n\";\nsession_id($session_id);\nsession_start();\nsession_destroy();\nob_end_flush();\nrmdir($path);\n?>")).toMatchSnapshot();
  });
});
