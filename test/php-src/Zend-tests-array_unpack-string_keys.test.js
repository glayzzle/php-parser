// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_unpack/string_keys.phpt
  it("Array unpacking with string keys", function () {
    expect(parser.parseCode("<?php\n// Works with both arrays and Traversables.\n$array = [1, 2, \"foo\" => 3, 4];\nvar_dump([...$array]);\n$iterator = new ArrayIterator([1, 2, \"foo\" => 3, 4]);\nvar_dump([...$iterator]);\n// Test overwriting behavior.\n$array1 = [\"foo\" => 1];\n$array2 = [\"foo\" => 2];\nvar_dump([\"foo\" => 0, ...$array1, ...$array2]);\nvar_dump([\"foo\" => 0, ...$array1, ...$array2, \"foo\" => 3]);\n// Test numeric string key from iterator.\nfunction gen() {\n    yield \"42\" => 42;\n}\nvar_dump([...gen()]);\n// Same as previous, but with refcounted string.\nfunction gen2() {\n    $foo = \"2\";\n    yield \"4\" . $foo => 42;\n}\nvar_dump([...gen2()]);\n?>")).toMatchSnapshot();
  });
});
