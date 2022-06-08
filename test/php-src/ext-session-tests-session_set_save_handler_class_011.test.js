// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_class_011.phpt
  it("Test session_set_save_handler() : shutdown failure", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_save_handler() : shutdown failure ***\\n\";\nclass MySession extends SessionHandler {\n    public $num;\n    public $destroyed = false;\n    public function __construct($num) {\n        $this->num = $num;\n        echo \"(#$this->num) constructor called\\n\";\n    }\n    public function __destruct() {\n        echo \"(#$this->num) destructor called\\n\";\n        $this->destroyed = true;\n    }\n    public function write($id, $data): bool {\n        if ($this->destroyed) {\n            echo \"(#$this->num) destroyed, cannot write\\n\";\n        } else {\n            echo \"(#$this->num) writing $id = $data\\n\";\n        }\n        return parent::write($id, $data);\n    }\n    public function close(): bool {\n        $id = session_id();\n        if ($this->destroyed) {\n            echo \"(#$this->num) destroyed, cannot write\\n\";\n        } else {\n            echo \"(#$this->num) closing $id\\n\";\n        }\n        return parent::close();\n    }\n}\n$handler = new MySession(1);\nsession_set_save_handler($handler, false);\nsession_start();\n$_SESSION['foo'] = 'bar';\necho \"done\\n\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
