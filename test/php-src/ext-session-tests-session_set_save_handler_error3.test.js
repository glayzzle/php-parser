// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_error3.phpt
  it("Test session_set_save_handler() function : error functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_save_handler() : error functionality ***\\n\";\nfunction open($save_path, $session_name) {\n     throw new Exception(\"Do something bad..!\");\n}\nfunction close() { return true; }\nfunction read($id) { return false; }\nfunction write($id, $session_data) { }\nfunction destroy($id) {  return true; }\nfunction gc($maxlifetime) {  return true; }\nsession_set_save_handler(\"open\", \"close\", \"read\", \"write\", \"destroy\", \"gc\");\nsession_start();\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
