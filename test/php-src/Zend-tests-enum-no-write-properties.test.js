// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-write-properties.phpt
  it("Enum properties cannot be written to", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nenum IntFoo: int {\n    case Bar = 0;\n}\n$bar = Foo::Bar;\ntry {\n    $bar->name = 'Baz';\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $bar->value = 1;\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n$intBar = IntFoo::Bar;\ntry {\n    $intBar->name = 'Baz';\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $intBar->value = 1;\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $intBar->value2 = 1;\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
