// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_class_013.phpt
  it("Test session_set_save_handler() : incorrect arguments for existing handler close", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_save_handler() : incorrect arguments for existing handler close ***\\n\";\nclass MySession extends SessionHandler {\n    public $i = 0;\n    public function open($path, $name): bool {\n        ++$this->i;\n        echo 'Open ', session_id(), \"\\n\";\n        return parent::open($path, $name);\n    }\n    public function read($key): string|false {\n        ++$this->i;\n        echo 'Read ', session_id(), \"\\n\";\n        return parent::read($key);\n    }\n    public function close(): bool {\n        return parent::close(false);\n    }\n}\n$oldHandler = ini_get('session.save_handler');\n$handler = new MySession;\nsession_set_save_handler($handler);\nsession_start();\nvar_dump(session_id(), $oldHandler, ini_get('session.save_handler'), $handler->i, $_SESSION);\n?>")).toMatchSnapshot();
  });
});
