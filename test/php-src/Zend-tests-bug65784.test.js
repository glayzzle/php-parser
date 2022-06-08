// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug65784.phpt
  it("Fixed Bug #65784 (Segfault with finally)", function () {
    expect(parser.parseCode("<?php\nfunction foo1() {\n    try {\n        throw new Exception(\"not catch\");\n        return true;\n    } finally {\n        try {\n            throw new Exception(\"caught\");\n        } catch (Exception $e) {\n        }\n    }\n}\ntry {\n    $foo = foo1();\n    var_dump($foo);\n} catch (Exception $e) {\n    do {\n        var_dump($e->getMessage());\n    } while ($e = $e->getPrevious());\n}\nfunction foo2() {\n    try  {\n        try {\n            throw new Exception(\"caught\");\n            return true;\n        } finally {\n            try {\n                throw new Exception(\"caught\");\n            } catch (Exception $e) {\n            }\n        }\n    } catch (Exception $e) {\n    }\n}\n$foo = foo2();\nvar_dump($foo);\nfunction foo3() {\n    try {\n        throw new Exception(\"not caught\");\n        return true;\n    } finally {\n        try {\n            throw new NotExists();\n        } catch (Exception $e) {\n        }\n    }\n}\n$bar = foo3();\n?>")).toMatchSnapshot();
  });
});
