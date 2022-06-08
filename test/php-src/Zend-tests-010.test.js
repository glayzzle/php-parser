// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/010.phpt
  it("get_parent_class() tests", function () {
    expect(parser.parseCode("<?php\ninterface i {\n    function test();\n}\nclass foo implements i {\n    function test() {\n        var_dump(get_parent_class());\n    }\n}\nclass bar extends foo {\n    function test_bar() {\n        var_dump(get_parent_class());\n    }\n}\n$bar = new bar;\n$foo = new foo;\n$foo->test();\n$bar->test();\n$bar->test_bar();\nvar_dump(get_parent_class($bar));\nvar_dump(get_parent_class($foo));\nvar_dump(get_parent_class(\"bar\"));\nvar_dump(get_parent_class(\"foo\"));\nvar_dump(get_parent_class(\"i\"));\ntry {\n    get_parent_class(\"\");\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    get_parent_class(\"[[[[\");\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    get_parent_class(\" \");\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump(get_parent_class(new stdclass));\ntry {\n    get_parent_class(array());\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    get_parent_class(1);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
