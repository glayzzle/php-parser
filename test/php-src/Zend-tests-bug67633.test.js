// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug67633.phpt
  it("Bug #67633: A foreach on an array returned from a function not doing copy-on-write", function () {
    expect(parser.parseCode("<?php\nfunction id($x) {\n    return $x;\n}\nfunction &ref_id(&$x) {\n    return $x;\n}\n$c = 'c';\n$array = ['a', 'b', $c];\nforeach(id($array) as &$v) {\n    $v .= 'q';\n}\nvar_dump($array);\nforeach(ref_id($array) as &$v) {\n    $v .= 'q';\n}\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
