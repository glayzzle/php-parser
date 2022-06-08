// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69017.phpt
  it("#69017 (Fail to push to the empty array with the constant value defined in class scope)", function () {
    expect(parser.parseCode("<?php\nclass c1\n{\n    const ZERO = 0;\n    const ONE = 1;\n    const MAX = PHP_INT_MAX;\n    public static $a1 = array(self::ONE => 'one');\n    public static $a2 = array(self::ZERO => 'zero');\n    public static $a3 = array(self::MAX => 'zero');\n}\nc1::$a1[] = 1;\nc1::$a2[] = 1;\ntry {\n    c1::$a3[] = 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(c1::$a1);\nvar_dump(c1::$a2);\nvar_dump(c1::$a3);\n?>")).toMatchSnapshot();
  });
});
