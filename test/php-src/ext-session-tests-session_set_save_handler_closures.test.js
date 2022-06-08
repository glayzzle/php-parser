// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_closures.phpt
  it("Test session_set_save_handler() function : using closures as callbacks", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_save_handler() : using closures as callbacks ***\\n\";\nrequire_once \"save_handler_closures.inc\";\nvar_dump(session_module_name());\nvar_dump(session_module_name(FALSE));\nvar_dump(session_module_name(\"blah\"));\nvar_dump(session_module_name(\"foo\"));\n$path = __DIR__ . '/session_set_save_handler_closures';\n@mkdir($path);\nsession_save_path($path);\nsession_set_save_handler($open_closure, $close_closure, $read_closure, $write_closure, $destroy_closure, $gc_closure);\nsession_start();\n$_SESSION[\"Blah\"] = \"Hello World!\";\n$_SESSION[\"Foo\"] = FALSE;\n$_SESSION[\"Guff\"] = 1234567890;\nvar_dump($_SESSION);\nsession_write_close();\nsession_unset();\nvar_dump($_SESSION);\necho \"Starting session again..!\\n\";\nsession_id($session_id);\nsession_set_save_handler($open_closure, $close_closure, $read_closure, $write_closure, $destroy_closure, $gc_closure);\nsession_start();\n$_SESSION['Bar'] = 'Foo';\nvar_dump($_SESSION);\nsession_write_close();\necho \"Cleanup\\n\";\nsession_start();\nsession_destroy();\nob_end_flush();\n@rmdir($path);\n?>")).toMatchSnapshot();
  });
});
