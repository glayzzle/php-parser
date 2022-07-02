// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug38220.phpt
  it("Bug #38220 (Crash on some object operations)", function () {
    expect(parser.parseCode("<?php\nclass drv {\n    public $obj;\n    function func1() {\n        echo \"func1(): {$this->obj->i}\\n\";\n    }\n    function close() {\n        echo \"close(): {$this->obj->i}\\n\";\n    }\n}\nclass A {\n    public $i;\n    function __construct($i) {\n        $this->i = $i;\n    }\n    function __call($method, $args) {\n        $drv = myserv::drv();\n        $drv->obj = $this;\n        echo \"before call $method\\n\";\n        print_r($this);\n        call_user_func_array(array($drv, $method), $args);\n        echo \"after call $method\\n\";\n        // Uncomment this line to work without crash\n//\t\t$drv->obj = null;\n    }\n    function __destruct() {\n        echo \"A::__destruct()\\n\";\n        $this->close();\n    }\n}\nclass myserv {\n    private static $drv = null;\n    static function drv() {\n        if (is_null(self::$drv))\n            self::$drv = new drv;\n        return self::$drv;\n    }\n}\n$obj1 = new A(1);\n$obj1->func1();\n$obj2 = new A(2);\nunset($obj1);\n$obj2->func1();\n?>")).toMatchSnapshot();
  });
});
