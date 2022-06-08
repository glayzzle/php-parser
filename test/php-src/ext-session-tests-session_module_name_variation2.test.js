// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_module_name_variation2.phpt
  it("Test session_module_name() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_module_name() : variation ***\\n\";\nfunction open($save_path, $session_name) { }\nfunction close() { }\nfunction read($id) { }\nfunction write($id, $session_data) { }\nfunction destroy($id) { }\nfunction gc($maxlifetime) { }\nvar_dump(session_module_name(\"files\"));\nsession_set_save_handler(\"open\", \"close\", \"read\", \"write\", \"destroy\", \"gc\");\nvar_dump(session_module_name());\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
