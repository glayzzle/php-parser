// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_module_name_variation4.phpt
  it("Test session_module_name() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_module_name() : variation ***\\n\";\nrequire_once \"save_handler.inc\";\n$path = __DIR__;\n$path = __DIR__ . '/session_module_name_variation4';\n@mkdir($path);\nsession_save_path($path);\nsession_module_name(\"files\");\nsession_start();\n$_SESSION[\"Blah\"] = \"Hello World!\";\n$_SESSION[\"Foo\"] = FALSE;\n$_SESSION[\"Guff\"] = 1234567890;\nvar_dump($_SESSION);\n$oldsession = $_SESSION;\nvar_dump(session_write_close());\nsession_start();\n// the session may have been GC'd or not; we accept either outcome\nvar_dump($_SESSION === $oldsession || $_SESSION === []);\nvar_dump(session_destroy());\nsession_start();\nvar_dump($_SESSION);\nvar_dump(session_destroy());\nob_end_flush();\nrmdir($path);\n?>")).toMatchSnapshot();
  });
});
