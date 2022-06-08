// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_class_004.phpt
  it("Test session_set_save_handler() : default object", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_save_handler() : default object ***\\n\";\nsession_set_save_handler(new SessionHandler);\nsession_start();\n$_SESSION['foo'] = \"hello\";\nvar_dump(session_id(), ini_get('session.save_handler'), $_SESSION);\nsession_write_close();\nsession_unset();\nsession_start();\nvar_dump($_SESSION);\nsession_write_close();\nsession_unset();\n?>")).toMatchSnapshot();
  });
});
