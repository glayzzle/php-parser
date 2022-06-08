// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/009.phpt
  it("get_class() tests", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    function bar () {\n        var_dump(get_class());\n    }\n    function testNull ()\n    {\n        try {\n            var_dump(get_class(null));\n        } catch (TypeError $e) {\n            echo $e->getMessage(), \"\\n\";\n        }\n    }\n}\nclass foo2 extends foo {\n}\n$f1 = new foo;\n$f2 = new foo2;\n$f1->bar();\n$f2->bar();\ntry {\n    var_dump(get_class());\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(get_class(\"qwerty\"));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(get_class($f1));\nvar_dump(get_class($f2));\n$f1->testNull();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
