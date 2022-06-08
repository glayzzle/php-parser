// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionProperty_getValue_error.phpt
  it("Test ReflectionProperty::getValue() errors.", function () {
    expect(parser.parseCode("<?php\nclass TestClass {\n    public $pub;\n    public $pub2 = 5;\n    static public $stat = \"static property\";\n    protected $prot = 4;\n    private $priv = \"keepOut\";\n}\nclass AnotherClass {\n}\n$instance = new TestClass();\n$invalidInstance = new AnotherClass();\n$propInfo = new ReflectionProperty('TestClass', 'pub2');\necho \"\\nInstance without property:\\n\";\n$propInfo = new ReflectionProperty('TestClass', 'stat');\necho \"\\nStatic property / too many args:\\n\";\ntry {\n    var_dump($propInfo->getValue($instance, true));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\nProtected property:\\n\";\n$propInfo = new ReflectionProperty('TestClass', 'prot');\nvar_dump($propInfo->getValue($instance));\necho \"\\n\\nInvalid instance:\\n\";\n$propInfo = new ReflectionProperty('TestClass', 'pub2');\ntry {\n    var_dump($propInfo->getValue($invalidInstance));\n} catch (ReflectionException $e) {\n    echo $e->getMessage();\n}\necho \"\\n\\nMissing instance:\\n\";\ntry {\n    var_dump($propInfo->getValue());\n} catch (TypeError $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
