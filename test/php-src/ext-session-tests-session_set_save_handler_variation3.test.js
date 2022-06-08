// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_variation3.phpt
  it("Test session_set_save_handler() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_save_handler() : variation ***\\n\";\nrequire_once \"save_handler.inc\";\n$path = __DIR__ . '/session_set_save_handler_variation3';\n@mkdir($path);\nvar_dump(session_status());\nsession_save_path($path);\nvar_dump(session_set_save_handler(\"open\", \"close\", \"read\", \"write\", \"destroy\", \"gc\"));\nvar_dump(session_destroy());\nob_end_flush();\nrmdir($path);\n?>")).toMatchSnapshot();
  });
});
