// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/send_unpack_empty_array.phpt
  it("Type inference of SEND_UNPACK with empty array", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $array = [1, 2, 3];\n    $values = [];\n    var_dump(array_push($array, 4, ...$values));\n    var_dump($array);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
