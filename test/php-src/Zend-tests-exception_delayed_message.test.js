// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_delayed_message.phpt
  it("Exception with delayed message computation", function () {
    expect(parser.parseCode("<?php\nclass MyException extends Exception {\n    public $message;\n    public $messageCallback;\n    public function __construct() {\n        $this->messageCallback = static function() {\n            return \"Foobar\";\n        };\n        $this->message = new class($this->message, $this->messageCallback) {\n            private $message;\n            private $messageCallback;\n            public function __construct(&$message, &$messageCallback)\n            {\n                $this->message = &$message;\n                $this->messageCallback = &$messageCallback;\n            }\n            public function __toString(): string\n            {\n                $messageCallback = $this->messageCallback;\n                $this->messageCallback = null;\n                return $this->message = $messageCallback();\n            }\n        };\n    }\n}\nthrow new MyException;\n?>")).toMatchSnapshot();
  });
});
