// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug60634_error_2.phpt
  it("Bug #60634 (Segmentation fault when trying to die() in SessionHandler::write()) - exception in write during exec", function () {
    expect(parser.parseCode("<?php\nob_start();\nfunction open($save_path, $session_name) {\n    return true;\n}\nfunction close() {\n    echo \"close: goodbye cruel world\\n\";\n    return true;\n}\nfunction read($id) {\n    return '';\n}\nfunction write($id, $session_data) {\n    echo \"write: goodbye cruel world\\n\";\n    throw new Exception;\n}\nfunction destroy($id) {\n    return true;\n}\nfunction gc($maxlifetime) {\n    return true;\n}\nsession_set_save_handler('open', 'close', 'read', 'write', 'destroy', 'gc');\nsession_start();\nsession_write_close();\necho \"um, hi\\n\";\n?>")).toMatchSnapshot();
  });
});
