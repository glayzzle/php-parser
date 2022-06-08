// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug81011.phpt
  it("Bug #81011 (mb_convert_encoding removes references from arrays)", function () {
    expect(parser.parseCode("<?php\n$array = [\n    'ads' => [\n        123 => ['name' => 'this', 'id' => 444],\n        234 => ['name' => 'that', 'id' => 555],\n    ],\n    'other' => ['one', 'two']\n    ];\n         \n// we modify array elements using reference     \nforeach( $array['ads'] as &$ad ){\n    $ad['premium'] = (int)($ad['id'] == 555);\n}\nvar_dump($array);\nvar_dump(mb_convert_encoding($array, 'UTF-8', 'UTF-8'));\n?>")).toMatchSnapshot();
  });
});
