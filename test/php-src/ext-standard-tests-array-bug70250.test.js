// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug70250.phpt
  it("Bug #70250 (extract() turns array elements to references)", function () {
    expect(parser.parseCode("<?php\n$array = ['key' => 'value'];\n$ref = &$array['key'];\nunset($ref);\nextract($array);\n$key = \"bad\";\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
