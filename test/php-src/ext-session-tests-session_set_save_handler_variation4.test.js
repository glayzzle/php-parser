// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_variation4.phpt
  it("Test session_set_save_handler() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_save_handler() : variation ***\\n\";\nfunction noisy_gc($maxlifetime) {\n    echo(\"GC [\".$maxlifetime.\"]\\n\");\n    echo gc($maxlifetime).\" deleted\\n\";\n    return true;\n}\nrequire_once \"save_handler.inc\";\n$path = __DIR__ . '/session_set_save_handler_variation4';\n@mkdir($path);\nsession_save_path($path);\nsession_set_save_handler(\"open\", \"close\", \"read\", \"write\", \"destroy\", \"noisy_gc\");\nsession_start();\n$_SESSION[\"Blah\"] = \"Hello World!\";\n$_SESSION[\"Foo\"] = FALSE;\n$_SESSION[\"Guff\"] = 1234567890;\nvar_dump($_SESSION);\n$session_id = session_id();\nvar_dump(session_write_close());\nsession_set_save_handler(\"open\", \"close\", \"read\", \"write\", \"destroy\", \"noisy_gc\");\nsession_id($session_id);\nsession_start();\nvar_dump($_SESSION);\nvar_dump(session_destroy());\nob_end_flush();\nrmdir($path);\n?>")).toMatchSnapshot();
  });
});
