// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/internal_parameter_default_value/check_all.phpt
  it("Check that all internal parameter defaults evaluate without error", function () {
    expect(parser.parseCode("<?php\nfunction checkDefaults(ReflectionFunctionAbstract $rf) {\n    foreach ($rf->getParameters() as $param) {\n        if ($param->isDefaultValueAvailable()) {\n            try {\n                $param->getDefaultValue();\n            } catch (Error $e) {\n                echo \"{$rf->getName()}: {$e->getMessage()}\\n\";\n            }\n        }\n    }\n}\nforeach (get_defined_functions()[\"internal\"] as $func) {\n    $rf = new ReflectionFunction($func);\n    checkDefaults($rf);\n}\nforeach (get_declared_classes() as $class) {\n    $rc = new ReflectionClass($class);\n    foreach ($rc->getMethods() as $method) {\n        checkDefaults($method);\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
