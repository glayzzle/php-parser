// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionProperty_isDefault_basic.phpt
  it("Test ReflectionProperty::isDefault() usage.", function () {
    expect(parser.parseCode("<?php\nfunction reflectProperty($class, $property) {\n    $propInfo = new ReflectionProperty($class, $property);\n    echo \"**********************************\\n\";\n    echo \"Reflecting on property $class::$property\\n\\n\";\n    echo \"isDefault():\\n\";\n    var_dump($propInfo->isDefault());\n    echo \"\\n**********************************\\n\";\n}\nclass TestClass {\n    public $pub;\n    static public $stat = \"static property\";\n    protected $prot = 4;\n    private $priv = \"keepOut\";\n}\nreflectProperty(\"TestClass\", \"pub\");\nreflectProperty(\"TestClass\", \"stat\");\nreflectProperty(\"TestClass\", \"prot\");\nreflectProperty(\"TestClass\", \"priv\");\n?>")).toMatchSnapshot();
  });
});
