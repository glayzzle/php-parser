// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72508.phpt
  it("Bug #72508 (strange references after recursive function call and \"switch\" statement)", function () {
    expect(parser.parseCode("<?php\nfunction a ($option) {\n    b($option['bla']);\n    c($option);\n    var_dump($option);\n}\nfunction b (&$string) {\n    $string = 'changed';\n}\nfunction c ($option) {\n    switch ($option['bla']) {\n    default:\n        $copy = $option;\n        $copy['bla'] = 'copy';\n        break;\n    }\n}\na(array('bla' => 'fasel'));\n?>")).toMatchSnapshot();
  });
});
