// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_unpack/classes.phpt
  it("Array unpacking with classes", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public const FOO = [0, ...self::ARR, 4];\n    public const ARR = [1, 2, 3];\n    public static $bar = [...self::ARR];\n}\nclass D {\n    public const A = [...self::B];\n    public const B = [...self::A];\n}\nvar_dump(C::FOO);\nvar_dump(C::$bar);\ntry {\n    var_dump(D::A);\n} catch (Error $ex) {\n    echo \"Exception: \" . $ex->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
