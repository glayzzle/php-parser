// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-from-invalid-int.phpt
  it("BackedEnum::from() reject invalid int", function () {
    expect(parser.parseCode("<?php\nenum Foo: int {\n    case Bar = 0;\n    case Baz = 1;\n}\ntry {\n    var_dump(Foo::from(2));\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
