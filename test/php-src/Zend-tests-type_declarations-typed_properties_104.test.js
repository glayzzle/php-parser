// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_104.phpt
  it("Uninitialized result of PRE_INC/PRE_DEC in case of exception", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\n$o = new class {\n    public string $a = \"123\";\n};\n$x = & $o->a;\ntry {\n    $ret = ++$x + 5;\n} catch (TypeError $e) {\n}\n?>\nOK")).toMatchSnapshot();
  });
});
