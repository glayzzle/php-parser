// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionProperty_basic1.phpt
  it("Test usage of ReflectionProperty methods __toString(), getName(), isPublic(), isPrivate(), isProtected(), isStatic(), getValue() and setValue().", function () {
    expect(parser.parseCode("<?php\nfunction reflectProperty($class, $property) {\n    $propInfo = new ReflectionProperty($class, $property);\n    echo \"**********************************\\n\";\n    echo \"Reflecting on property $class::$property\\n\\n\";\n    echo \"__toString():\\n\";\n    var_dump($propInfo->__toString());\n    echo \"getName():\\n\";\n    var_dump($propInfo->getName());\n    echo \"isPublic():\\n\";\n    var_dump($propInfo->isPublic());\n    echo \"isPrivate():\\n\";\n    var_dump($propInfo->isPrivate());\n    echo \"isProtected():\\n\";\n    var_dump($propInfo->isProtected());\n    echo \"isStatic():\\n\";\n    var_dump($propInfo->isStatic());\n    $instance = new $class();\n    if ($propInfo->isPublic()) {\n        echo \"getValue():\\n\";\n        var_dump($propInfo->getValue($instance));\n        $propInfo->setValue($instance, \"NewValue\");\n        echo \"getValue() after a setValue():\\n\";\n        var_dump($propInfo->getValue($instance));\n    }\n    echo \"\\n**********************************\\n\";\n}\nclass TestClass {\n    public $pub;\n    static public $stat = \"static property\";\n    protected $prot = 4;\n    private $priv = \"keepOut\";\n}\nreflectProperty(\"TestClass\", \"pub\");\nreflectProperty(\"TestClass\", \"stat\");\nreflectProperty(\"TestClass\", \"prot\");\nreflectProperty(\"TestClass\", \"priv\");\n?>")).toMatchSnapshot();
  });
});
