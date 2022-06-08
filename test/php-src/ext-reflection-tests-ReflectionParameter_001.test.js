// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionParameter_001.phpt
  it("ReflectionParameter class - getNames() method.", function () {
    expect(parser.parseCode("<?php\nclass ReflectTestClass {\n    public static function twoArgFunction($theIncrement, $anotherParam) {\n        return ++$theIncrement;\n    }\n    public function oneArgNonStatic($theParam) {\n        $theParam--;\n    }\n    public function noArgs() {\n        echo \"No arg function\\n\";\n    }\n}\n// Create an instance of the Reflection_Method class\n$method = new ReflectionMethod('ReflectTestClass', 'twoArgFunction');\n// Get the parameters\n$parameters = $method->getParameters();\necho \"Parameters from twoArgMethod:\\n\\n\";\nforeach($parameters as $parameter) {\n    var_dump($parameter);\n    $name = $parameter->getName();\n    echo \"\\n\";\n}\n$method = new ReflectionMethod('ReflectTestClass', 'oneArgNonStatic');\n$parameters = $method->getParameters();\necho \"Parameters from oneArgNonStatic:\\n\\n\";\nforeach($parameters as $parameter) {\n    var_dump($parameter);\n    $name = $parameter->getName();\n    echo \"\\n\";\n}\n$method = new ReflectionMethod('ReflectTestClass', 'noArgs');\n$parameters = $method->getParameters();\necho \"Parameters from noArgs:\\n\\n\";\nvar_dump($parameters);\nforeach($parameters as $parameter) {\n    var_dump($parameter);\n    $name = $parameter->getName();\n    echo \"\\n\";\n}\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
