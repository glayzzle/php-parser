// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_056.phpt
  it("Type change in assign_op (use-after-free)", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nclass A {\n    public string $foo;\n}\n$o = new A;\n$o->foo = \"1\" . str_repeat(\"0\", 2);\ntry {\n    $o->foo += 5;\n} catch (Throwable $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump($o->foo);\nunset($o);\n?>")).toMatchSnapshot();
  });
});
