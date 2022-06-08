// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/007.phpt
  it("ReflectionClass::newInstance[Args]", function () {
    expect(parser.parseCode("<?php\nfunction test($class)\n{\n    echo \"====>$class\\n\";\n    try\n    {\n        $ref = new ReflectionClass($class);\n    }\n    catch (ReflectionException $e)\n    {\n        var_dump($e->getMessage());\n        return; // only here\n    }\n    echo \"====>newInstance()\\n\";\n    try\n    {\n        var_dump($ref->newInstance());\n    }\n    catch (ReflectionException $e)\n    {\n        var_dump($e->getMessage());\n    }\n    catch (Throwable $e)\n    {\n        echo \"Exception: \" . $e->getMessage() . \"\\n\";\n    }\n    echo \"====>newInstance(25)\\n\";\n    try\n    {\n        var_dump($ref->newInstance(25));\n    }\n    catch (ReflectionException $e)\n    {\n        var_dump($e->getMessage());\n    }\n    echo \"====>newInstance(25, 42)\\n\";\n    try\n    {\n        var_dump($ref->newInstance(25, 42));\n    }\n    catch (ReflectionException $e)\n    {\n        var_dump($e->getMessage());\n    }\n    echo \"\\n\";\n}\nspl_autoload_register(function ($class) {\n    echo __FUNCTION__ . \"($class)\\n\";\n});\ntest('Class_does_not_exist');\nClass NoCtor\n{\n}\ntest('NoCtor');\nClass WithCtor\n{\n    function __construct()\n    {\n        echo __METHOD__ . \"()\\n\";\n        var_dump(func_get_args());\n    }\n}\ntest('WithCtor');\nClass WithCtorWithArgs\n{\n    function __construct($arg)\n    {\n        echo __METHOD__ . \"($arg)\\n\";\n        var_dump(func_get_args());\n    }\n}\ntest('WithCtorWithArgs');\n?>")).toMatchSnapshot();
  });
});
