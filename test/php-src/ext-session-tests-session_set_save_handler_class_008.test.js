// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_class_008.phpt
  it("Test session_set_save_handler() : manual shutdown", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_save_handler() : manual shutdown ***\\n\";\nclass MySession extends SessionHandler {\n    public $num;\n    public function __construct($num) {\n        $this->num = $num;\n        echo \"(#$this->num) constructor called\\n\";\n    }\n    public function __destruct() {\n        echo \"(#$this->num) destructor called\\n\";\n    }\n    public function finish() {\n        $id = session_id();\n        echo \"(#$this->num) finish called $id\\n\";\n        session_write_close();\n    }\n    public function write($id, $data): bool {\n        echo \"(#$this->num) writing $id = $data\\n\";\n        return parent::write($id, $data);\n    }\n    public function close(): bool {\n        $id = session_id();\n        echo \"(#$this->num) closing $id\\n\";\n        return parent::close();\n    }\n}\n$handler = new MySession(1);\nsession_set_save_handler($handler);\nsession_start();\n$_SESSION['foo'] = 'bar';\n// explicit close\n$handler->finish();\necho \"done\\n\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
