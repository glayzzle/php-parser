// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_class_005.phpt
  it("Test session_set_save_handler() : incomplete implementation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_save_handler() : incomplete implementation ***\\n\";\nclass MySession6 extends SessionHandler {\n    public function open($path, $name): bool {\n        // don't call parent\n        return true;\n    }\n    public function read($id): string|false {\n        // should error because parent::open hasn't been called\n        return parent::read($id);\n    }\n}\n$handler = new MySession6;\nsession_set_save_handler($handler);\nvar_dump(session_start());\nvar_dump(session_id(), ini_get('session.save_handler'), $_SESSION);\nsession_write_close();\nsession_unset();\n?>")).toMatchSnapshot();
  });
});
