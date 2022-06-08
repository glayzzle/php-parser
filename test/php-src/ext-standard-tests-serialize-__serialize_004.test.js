// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/__serialize_004.phpt
  it("__serialize() mechanism (004): Delayed __unserialize() calls", function () {
    expect(parser.parseCode("<?php\nclass Wakeup {\n    public $data;\n    public function __construct(array $data) {\n        $this->data = $data;\n    }\n    public function __wakeup() {\n        echo \"__wakeup() called\\n\";\n        var_dump($this->data);\n        $this->woken_up = true;\n    }\n}\nclass Unserialize {\n    public $data;\n    public function __construct(array $data) {\n        $this->data = $data;\n    }\n    public function __serialize() {\n        return $this->data;\n    }\n    public function __unserialize(array $data) {\n        $this->data = $data;\n        echo \"__unserialize() called\\n\";\n        var_dump($this->data);\n        $this->unserialized = true;\n    }\n}\n$obj = new Wakeup([new Unserialize([new Wakeup([new Unserialize([])])])]);\nvar_dump($s = serialize($obj));\nvar_dump(unserialize($s));\n?>")).toMatchSnapshot();
  });
});
