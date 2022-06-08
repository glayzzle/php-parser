// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionProperty_typed_static.phpt
  it("ReflectionProperty::getValue() on typed static property", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public static int $x = 42;\n    public static int $y;\n    public static $z;\n}\n$rp = new ReflectionProperty('Test', 'x');\nvar_dump($rp->getValue());\n$rp = new ReflectionProperty('Test', 'y');\ntry {\n    var_dump($rp->getValue());\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$rp->setValue(\"24\");\nvar_dump($rp->getValue());\ntry {\n    $rp->setValue(\"foo\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($rp->getValue());\nTest::$z =& Test::$y;\n$rp = new ReflectionProperty('Test', 'z');\ntry {\n    $rp->setValue(\"foo\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($rp->getValue());\n?>")).toMatchSnapshot();
  });
});
