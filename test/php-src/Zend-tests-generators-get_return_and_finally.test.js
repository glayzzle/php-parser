// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/get_return_and_finally.phpt
  it("Test interaction of Generator::getReturn() and finally", function () {
    expect(parser.parseCode("<?php\nfunction gen1() {\n    try {\n        throw new Exception(\"gen1() throw\");\n    } finally {\n        return 42;\n    }\n    yield;\n}\n// The exception was discarded, so this works\n$gen = gen1();\nvar_dump($gen->getReturn());\nfunction gen2() {\n    try {\n        return 42;\n    } finally {\n        throw new Exception(\"gen2() throw\");\n    }\n    yield;\n}\n$gen = gen2();\ntry {\n    // This will throw an exception (from the finally)\n    // during auto-priming, so fails\n    var_dump($gen->getReturn());\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    // This fails, because the return value was discarded\n    var_dump($gen->getReturn());\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
