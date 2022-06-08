// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug61347.phpt
  it("Bug #61347 (inconsist isset behavior of Arrayobject)", function () {
    expect(parser.parseCode("<?php\n$a = array('b' => NULL, 37 => NULL);\nvar_dump(isset($a['b'])); //false\n$b = new ArrayObject($a);\nvar_dump(isset($b['b'])); //false\nvar_dump(isset($b[37])); //false\nvar_dump(isset($b['no_exists'])); //false\nvar_dump(empty($b['b'])); //true\nvar_dump(empty($b[37])); //true\nvar_dump($b['b']);\n$a = array('b' => '', 37 => false);\n$b = new ArrayObject($a);\nvar_dump(isset($b['b'])); //true\nvar_dump(isset($b[37])); //true\nvar_dump(isset($b['no_exists'])); //false\nvar_dump(empty($b['b'])); //true\nvar_dump(empty($b[37])); //true\n?>")).toMatchSnapshot();
  });
});
