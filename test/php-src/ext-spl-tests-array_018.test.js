// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_018.phpt
  it("SPL: ArrayObject and \\0", function () {
    expect(parser.parseCode("<?php\ntry\n{\n    $foo = new ArrayObject();\n    $foo->offsetSet(\"\\0\", \"Foo\");\n}\ncatch (Exception $e)\n{\n    var_dump($e->getMessage());\n}\nvar_dump($foo);\ntry\n{\n    $foo = new ArrayObject();\n    $data = explode(\"=\", \"=Foo\");\n    $foo->offsetSet($data[0], $data[1]);\n}\ncatch (Exception $e)\n{\n    var_dump($e->getMessage());\n}\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
