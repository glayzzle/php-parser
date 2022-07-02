// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-unset-propertes.phpt
  it("Enum properties cannot be unset", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nenum IntFoo: int {\n    case Bar = 0;\n}\n$foo = Foo::Bar;\ntry {\n    unset($foo->name);\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n$intFoo = IntFoo::Bar;\ntry {\n    unset($intFoo->name);\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    unset($intFoo->value);\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
