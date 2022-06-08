// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionParameter_002.phpt
  it("ReflectionParameter class - isPassedByReferenceMethod()", function () {
    expect(parser.parseCode("<?php\nclass ReflectTestClass {\n    public static function staticMethod(&$paramOne, $anotherParam) {\n        return ++$theIncrement;\n    }\n    public function instanceMethod($firstParam, &$secondParam) {\n      $firstParam = \"Hello\\n\";\n    }\n}\n// Create an instance of the Reflection_Method class\n$method = new ReflectionMethod('ReflectTestClass', 'staticMethod');\n// Get the parameters\n$parameters = $method->getParameters();\necho \"Parameters from staticMethod:\\n\\n\";\nforeach($parameters as $parameter) {\n    var_dump($parameter);\n    if($parameter->isPassedByReference()) {\n        echo \"This param is passed by reference\\n\";\n    } else {\n        echo \"This param is not passed by reference\\n\";\n    }\n    echo \"\\n\";\n}\n// Create an instance of the Reflection_Method class\n$method = new ReflectionMethod('ReflectTestClass', 'instanceMethod');\n// Get the parameters\n$parameters = $method->getParameters();\necho \"Parameters from instanceMethod:\\n\\n\";\nforeach($parameters as $parameter) {\n    var_dump($parameter);\n    if($parameter->isPassedByReference()) {\n        echo \"This param is passed by reference\\n\";\n    } else {\n        echo \"This param is not passed by reference\\n\";\n    }\n    echo \"\\n\";\n}\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
