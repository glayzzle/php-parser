// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_module_name_variation3.phpt
  it("Test session_module_name() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_module_name() : variation ***\\n\";\nfunction open($save_path, $session_name) {\n    throw new Exception(\"Stop...!\");\n}\nfunction close() { return true; }\nfunction read($id) { return ''; }\nfunction write($id, $session_data) { return true; }\nfunction destroy($id) { return true; }\nfunction gc($maxlifetime) { return true; }\nvar_dump(session_module_name(\"files\"));\nsession_set_save_handler(\"open\", \"close\", \"read\", \"write\", \"destroy\", \"gc\");\nvar_dump(session_module_name());\nvar_dump(session_start());\nvar_dump(session_module_name());\nvar_dump(session_destroy());\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
