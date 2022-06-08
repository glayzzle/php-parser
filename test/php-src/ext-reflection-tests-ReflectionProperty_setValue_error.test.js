// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionProperty_setValue_error.phpt
  it("Test ReflectionProperty::setValue() error cases.", function () {
    expect(parser.parseCode("<?php\nclass TestClass {\n    public $pub;\n    public $pub2 = 5;\n    static public $stat = \"static property\";\n    protected $prot = 4;\n    private $priv = \"keepOut\";\n}\nclass AnotherClass {\n}\n$instance = new TestClass();\n$instanceWithNoProperties = new AnotherClass();\n$propInfo = new ReflectionProperty('TestClass', 'pub2');\necho \"\\nProtected property:\\n\";\n$propInfo = new ReflectionProperty('TestClass', 'prot');\n$propInfo->setValue($instance, \"NewValue\");\nvar_dump($propInfo->getValue($instance));\necho \"\\n\\nInstance without property:\\n\";\n$propInfo = new ReflectionProperty('TestClass', 'pub2');\nvar_dump($propInfo->setValue($instanceWithNoProperties, \"NewValue\"));\nvar_dump($instanceWithNoProperties->pub2);\n?>")).toMatchSnapshot();
  });
});
