// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_class_003.phpt
  it("Test session_set_save_handler() : inheritance", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_save_handler() : inheritance ***\\n\";\nclass MySession3 extends SessionHandler {\n    public $i = 0;\n    public function open($path, $name): bool {\n        ++$this->i;\n        return parent::open($path, $name);\n    }\n    public function read($key): string|false {\n        ++$this->i;\n        return parent::read($key);\n    }\n}\nclass MySession4 extends MySession3 {\n    public function write($id, $data): bool {\n        $this->i = \"hai\";\n        return parent::write($id, $data);\n    }\n}\n$handler = new MySession3;\nsession_set_save_handler($handler);\nsession_start();\n$_SESSION['foo'] = \"hello\";\nsession_write_close();\nsession_unset();\nsession_start();\nvar_dump($_SESSION, $handler->i);\nsession_write_close();\nsession_unset();\n$handler = new MySession4;\nsession_set_save_handler($handler);\nsession_start();\n$_SESSION['bar'] = 'hello';\nsession_write_close();\nsession_unset();\nvar_dump(session_id(), $_SESSION, $handler->i);\n?>")).toMatchSnapshot();
  });
});
