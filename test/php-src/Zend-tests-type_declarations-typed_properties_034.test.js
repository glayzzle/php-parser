// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_034.phpt
  it("Test typed properties passed to typed function", function () {
    expect(parser.parseCode("<?php\n$foo = new class {\n    public ?int $bar = 42;\n    public int $baz;\n    public function &getIterator() {\n        foreach (['1', &$this->bar] as &$item) {\n            yield $item;\n        }\n    }\n};\nfunction foo(?int &$a) {\n    var_dump($a);\n    $a = null;\n}\nfoo($foo->bar);\ntry {\n    $foo->baz = &$foo->bar;\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\n$foo->bar = 10;\nforeach ($foo->getIterator() as &$item) {\n    $foo->baz = &$item;\n    var_dump($foo->baz);\n}\ntry {\n    foo($foo->bar);\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
