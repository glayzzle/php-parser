// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_setStaticPropertyValue_003.phpt
  it("ReflectionClass::setStaticPropertyValue() - type constraints must be enforced", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public static $x;\n    public static int $y = 2;\n}\n$rc = new ReflectionClass('Test');\ntry {\n    $rc->setStaticPropertyValue(\"y\", \"foo\");\n} catch (TypeError $e) { echo $e->getMessage(), \"\\n\"; }\nvar_dump(Test::$y);\n$rc->setStaticPropertyValue(\"y\", \"21\");\nvar_dump(Test::$y);\nTest::$x =& Test::$y;\ntry {\n    $rc->setStaticPropertyValue(\"x\", \"foo\");\n} catch (TypeError $e) { echo $e->getMessage(), \"\\n\"; }\nvar_dump(Test::$y);\n$rc->setStaticPropertyValue(\"x\", \"42\");\nvar_dump(Test::$y);\n?>")).toMatchSnapshot();
  });
});
