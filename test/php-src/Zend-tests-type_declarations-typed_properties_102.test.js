// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_102.phpt
  it("Compound assignment operator on static property holding ref", function () {
    expect(parser.parseCode("<?php declare(strict_types=1);\nclass Test {\n    public static int $intProp = 123;\n    public static $prop;\n}\nTest::$prop =& Test::$intProp;\ntry {\n    Test::$prop .= \"foobar\";\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(Test::$prop, Test::$intProp);\n?>")).toMatchSnapshot();
  });
});
