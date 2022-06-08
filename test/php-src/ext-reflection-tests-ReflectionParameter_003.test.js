// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionParameter_003.phpt
  it("ReflectionParameter class - isOptional, isDefaultValueAvailable and getDefaultValue methods.", function () {
    expect(parser.parseCode("<?php\nclass ReflectTestClass {\n    public static function staticMethod($paramOne, $anotherParam = \"bob\",\n                                        &$thirdParam = \"jack\", $arrayParam = array('one')) {\n        echo \"hello from test\\n\";\n        echo \"third is $thirdParam\\n\";\n        return ++$theIncrement;\n    }\n}\n$jane = \"jane\";\nReflectTestClass::staticMethod(\"bob\", \"jack\");\n$refMethod = new ReflectionMethod('ReflectTestClass', 'staticMethod');\n$refParameters = $refMethod->getParameters();\necho \"parameter names from staticMethod method:\\n\\n\";\nforeach($refParameters as $parameter) {\n    var_dump($parameter);\n    if($parameter->isOptional()) {\n      echo \"this parameter is optional\\n\";\n    } else {\n      echo \"this parameter is not optional\\n\";\n    }\n    if($parameter->isDefaultValueAvailable()) {\n      echo \"this parameter has a default value\\n\";\n    } else {\n      echo \"this parameter has no default value\\n\";\n    }\n    /*\n    $val = 0;\n    try {\n        $val = $parameter->getDefaultValue();\n        var_dump($val);\n    } catch (ReflectionException $e) {\n        print $e->getMessage();\n        echo \"\\n\";\n    }\n    */\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
