// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_replace_array_refs.phpt
  it("Test str_replace() function and array refs", function () {
    expect(parser.parseCode("<?php\n$data = ['a' => 'b', 'numeric' => 1];\n$ref = &$data;\n$b = &$ref['a'];\n$numeric = &$ref['numeric'];\nvar_dump(str_replace(array_keys($data), $data, \"a numeric\"));\nvar_dump($numeric);\nvar_dump($data['numeric']);\n?>")).toMatchSnapshot();
  });
});
