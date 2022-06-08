// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug61728.phpt
  it("Bug #61728 (PHP crash when calling ob_start in request_shutdown phase)", function () {
    expect(parser.parseCode("<?php\nfunction output_html($ext) {\n    return strlen($ext);\n}\nfunction open ($save_path, $session_name) {\n    return true;\n}\nfunction close() {\n    return true;\n}\nfunction read ($id) {\n    return '';\n}\nfunction write ($id, $sess_data) {\n    ob_start(\"output_html\");\n    echo \"laruence\";\n    ob_end_flush();\n    return true;\n}\nfunction destroy ($id) {\n    return true;\n}\nfunction gc ($maxlifetime) {\n    return true;\n}\nsession_set_save_handler (\"open\", \"close\", \"read\", \"write\", \"destroy\", \"gc\");\nsession_start();\n?>")).toMatchSnapshot();
  });
});
