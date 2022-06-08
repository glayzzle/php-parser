// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionProperty_constructor_variation1.phpt
  it("ReflectionProperty::__construct(): ensure inherited private props can't be accessed through ReflectionProperty.", function () {
    expect(parser.parseCode("<?php\nclass C {\n    private $p = 1;\n    static function testFromC() {\n        try {\n          $rp = new ReflectionProperty(\"D\", \"p\");\n          var_dump($rp);\n        } catch (Exception $e) {\n            echo $e->getMessage();\n        }\n    }\n}\nclass D extends C{\n    static function testFromD() {\n        try {\n          $rp = new ReflectionProperty(\"D\", \"p\");\n          var_dump($rp);\n        } catch (Exception $e) {\n            echo $e->getMessage();\n        }\n    }\n}\necho \"--> Reflect inherited private from global scope:\\n\";\ntry {\n  $rp = new ReflectionProperty(\"D\", \"p\");\n  var_dump($rp);\n} catch (Exception $e) {\n    echo $e->getMessage();\n}\necho \"\\n\\n--> Reflect inherited private from declaring scope:\\n\";\nC::testFromC();\necho \"\\n\\n--> Reflect inherited private from declaring scope via subclass:\\n\";\nD::testFromC();\necho \"\\n\\n--> Reflect inherited private from subclass:\\n\";\nD::testFromD();\n?>")).toMatchSnapshot();
  });
});
