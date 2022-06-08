// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionProperty_basic2.phpt
  it("Test usage of ReflectionProperty methods isDefault(), getModifiers(), getDeclaringClass() and getDocComment().", function () {
    expect(parser.parseCode("<?php\nfunction reflectProperty($class, $property) {\n    $propInfo = new ReflectionProperty($class, $property);\n    echo \"**********************************\\n\";\n    echo \"Reflecting on property $class::$property\\n\\n\";\n    echo \"isDefault():\\n\";\n    var_dump($propInfo->isDefault());\n    echo \"getModifiers():\\n\";\n    var_dump($propInfo->getModifiers());\n    echo \"getDeclaringClass():\\n\";\n    var_dump($propInfo->getDeclaringClass());\n    echo \"getDocComment():\\n\";\n    var_dump($propInfo->getDocComment());\n    echo \"\\n**********************************\\n\";\n}\nclass TestClass {\n    public $pub;\n    static public $stat = \"static property\";\n    /**\n     * This property has a comment.\n     */\n    protected $prot = 4;\n    private $priv = \"keepOut\";\n}\nreflectProperty(\"TestClass\", \"pub\");\nreflectProperty(\"TestClass\", \"stat\");\nreflectProperty(\"TestClass\", \"prot\");\nreflectProperty(\"TestClass\", \"priv\");\n?>")).toMatchSnapshot();
  });
});
