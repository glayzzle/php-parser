// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71756.phpt
  it("Bug #71756 (Call-by-reference widens scope to uninvolved functions when used in switch)", function () {
    expect(parser.parseCode("<?php\nfunction a ($option) {\n    b($option['bla']);\n    c($option);\n    var_dump($option);\n}\nfunction b (&$string) {\n    $string = 'changed';\n}\nfunction c ($option) {\n    switch ($option['bla']) {\n    case 'changed':\n        $copy = $option;\n        $copy['bla'] = 'copy';\n        break;\n    }\n}\na(array('bla' => 'false'));\n?>")).toMatchSnapshot();
  });
});
