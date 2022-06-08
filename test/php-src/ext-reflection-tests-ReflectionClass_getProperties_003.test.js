// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getProperties_003.phpt
  it("ReflectionClass::getProperties()", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public  $pub1;\n    public  $pub2;\n    private  $priv1;\n    private  $priv2;\n    static public  $pubs;\n    static public  $pubs2;\n    static private  $privs1;\n    static private  $privs2;\n}\n$rc = new ReflectionClass(\"C\");\n$StaticFlag = ReflectionProperty::IS_STATIC;\n$pubFlag =  ReflectionProperty::IS_PUBLIC;\n$privFlag = ReflectionProperty::IS_PRIVATE;\necho \"No properties:\";\nvar_dump($rc->getProperties(0));\necho \"Public properties:\";\nvar_dump($rc->getProperties($pubFlag));\necho \"Private properties:\";\nvar_dump($rc->getProperties($privFlag));\necho \"Public or static properties:\";\nvar_dump($rc->getProperties($StaticFlag | $pubFlag));\necho \"Private or static properties:\";\nvar_dump($rc->getProperties($StaticFlag | $privFlag));\n?>")).toMatchSnapshot();
  });
});
