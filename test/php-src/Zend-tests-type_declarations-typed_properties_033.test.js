// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_033.phpt
  it("Test typed properties yield reference guard", function () {
    expect(parser.parseCode("<?php\n$foo = new class {\n    public int $foo = 1;\n    public int $bar = 3;\n    public int $baz = 5;\n    public int $qux = PHP_INT_MAX;\n    public function &fetch() {\n        yield $this->foo;\n        yield $this->bar;\n        yield $this->baz;\n        yield $this->qux;\n    }\n};\ntry {\n    foreach ($foo->fetch() as &$prop) {\n        $prop += 1;\n    }\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
