// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_class_006.phpt
  it("Test session_set_save_handler() : using objects in close", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_save_handler() : using objects in close ***\\n\";\nclass MySession7_Foo {\n    public $state = 'ok';\n    function __destruct() {\n        $this->state = 'destroyed';\n    }\n}\nclass MySession7 extends SessionHandler {\n    public $foo;\n    public function close(): bool {\n        var_dump($this->foo);\n        @var_dump($GLOBALS['bar']);\n        return parent::close();\n    }\n}\n$bar = new MySession7_Foo;\n$handler = new MySession7;\n$handler->foo = new MySession7_Foo;\nsession_set_save_handler($handler);\nsession_start();\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
