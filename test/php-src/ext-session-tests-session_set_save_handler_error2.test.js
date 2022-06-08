// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_error2.phpt
  it("Test session_set_save_handler() function : error functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_save_handler() : error functionality ***\\n\";\nfunction open($save_path, $session_name) { return true; }\nfunction close() { return true; }\nfunction read($id) { return false; }\nfunction write($id, $session_data) { }\nfunction destroy($id) {  return true; }\nfunction gc($maxlifetime) {  return true; }\nsession_set_save_handler(\"open\", \"close\", \"read\", \"write\", \"destroy\", \"gc\");\nsession_start();\n$_SESSION[\"Blah\"] = \"Hello World!\";\n$_SESSION[\"Foo\"] = FALSE;\n$_SESSION[\"Guff\"] = 1234567890;\nvar_dump($_SESSION);\nsession_write_close();\nvar_dump($_SESSION);\nsession_set_save_handler(\"open\", \"close\", \"read\", \"write\", \"destroy\", \"gc\");\nsession_start();\nvar_dump($_SESSION);\nsession_destroy();\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
