// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_067.phpt
  it("Iterable typed properties must be accepted to by-ref array arguments", function () {
    expect(parser.parseCode("<?php\n$obj = new class {\n    public ?iterable $it = null;\n};\nfunction arr(?array &$arr) {\n    $arr = [1];\n}\narr($obj->it);\nvar_dump($obj->it);\narray_shift($obj->it);\nvar_dump($obj->it);\nparse_str(\"foo=bar\", $obj->it);\nvar_dump($obj->it);\n$obj->it = [];\nvar_dump($obj->it);\n?>")).toMatchSnapshot();
  });
});
