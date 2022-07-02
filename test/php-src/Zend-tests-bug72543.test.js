// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72543.phpt
  it("Bug #72543 (different references behavior comparing to PHP 5)", function () {
    expect(parser.parseCode("<?php\nfunction create_references(&$array) {\n    foreach ($array as $key => $value) {\n        create_references($array[$key]);\n    }\n}\nfunction change_copy($copy) {\n        $copy['b']['z']['z'] = $copy['b'];\n}\n$data = [\n    'a' => [\n        'b' => [],\n    ],\n];\ncreate_references($data);\n$copy = $data['a'];\nvar_dump($copy);\nchange_copy($copy);\nvar_dump($copy); //RECURSION\n?>")).toMatchSnapshot();
  });
});
