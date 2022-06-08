// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug31102.phpt
  it("Bug #31102 (Exception not handled when thrown inside autoloader)", function () {
    expect(parser.parseCode("<?php\n$test = 0;\nspl_autoload_register(function ($class) {\n    global $test;\n    echo __METHOD__ . \"($class,$test)\\n\";\n    switch($test)\n    {\n    case 1:\n        eval(\"class $class { function __construct(){throw new Exception('$class::__construct');}}\");\n        return;\n    case 2:\n        eval(\"class $class { function __construct(){throw new Exception('$class::__construct');}}\");\n        throw new Exception(__METHOD__);\n        return;\n    case 3:\n        return;\n    }\n});\nwhile($test++ < 5)\n{\n    try\n    {\n        eval(\"\\$bug = new Test$test();\");\n    }\n    catch (Exception $e)\n    {\n        echo \"Caught: \" . $e->getMessage() . \"\\n\";\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
