// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug36975.phpt
  it("Bug #36975 (natcasesort() causes array_pop() to misbehave)", function () {
    expect(parser.parseCode("<?php\n$a = array('aa', 'aa', 'bb', 'bb', 'cc', 'cc');\n$test = natcasesort($a);\nif ($test) {\n  echo \"natcasesort success!\\n\";\n}\n$val = array_pop($a);\n$a[] = $val;\nvar_dump($a);\n$b = array(1 => 'foo', 0 => 'baz');\narray_pop($b);\n$b[] = 'bar';\narray_push($b, 'bar');\nprint_r($b);\n$c = array(0, 0, 0, 0, 0);\nasort($c);\narray_pop($c);\n$c[] = 'foo';\n$c[] = 'bar';\nvar_dump($c);\n?>")).toMatchSnapshot();
  });
});
