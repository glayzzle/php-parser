// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug50383.phpt
  it("Bug #50383 (Exceptions thrown in __call / __callStatic do not include file and line in trace)", function () {
    expect(parser.parseCode("<?php\nclass myClass {\n    public static function __callStatic($method, $args) {\n        throw new Exception(\"Missing static method '$method'\\n\");\n    }\n    public function __call($method, $args) {\n        throw new Exception(\"Missing method '$method'\\n\");\n    }\n}\nfunction thrower() {\n    myClass::ThrowException();\n}\nfunction thrower2() {\n    $x = new myClass;\n    $x->foo();\n}\ntry {\n    thrower();\n} catch(Exception $e) {\n    print $e->getMessage();\n    print_r($e->getTrace());\n}\ntry {\n    thrower2();\n} catch (Exception $e) {\n    print $e->getMessage();\n    print_r($e->getTrace());\n}\n?>")).toMatchSnapshot();
  });
});
