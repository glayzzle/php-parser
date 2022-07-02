// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoop.016.phpt
  it("Ensure foreach splits the iterated entity from its cow reference set, for all sorts of iterated entities.", function () {
    expect(parser.parseCode("<?php\n  echo \"\\n\" . '$a' . \"\\n\";\n  $b = $a = array('original');\n  foreach($a as $k=>&$v) {\n     $v = 'changed';\n  }\n  var_dump($b);\n  unset($a, $b);\n  echo \"\\n\" . '${\\'a\\'}' . \"\\n\";\n  $b = $a = array('original');\n  foreach(${'a'} as $k=>&$v) {\n     $v = 'changed';\n  }\n  var_dump($b);\n  unset($a, $b);\n  echo \"\\n\" . '$$a' . \"\\n\";\n  $a = 'blah';\n  $$a = array('original');\n  $b = $$a;\n  foreach($$a as $k=>&$v) {\n     $v = 'changed';\n  }\n  var_dump($b);\n  unset($a, $b);\n  echo \"\\n\" . '$a[0]' . \"\\n\";\n  $b = $a[0] = array('original');\n  foreach($a[0] as $k=>&$v) {\n     $v = 'changed';\n  }\n  var_dump($b);\n  unset($a, $b);\n  echo \"\\n\" . '$a[0][0]' . \"\\n\";\n  $b = $a[0][0] = array('original');\n  foreach($a[0][0] as $k=>&$v) {\n     $v = 'changed';\n  }\n  var_dump($b);\n  unset($a, $b);\n  echo \"\\n\" . '$a->b' . \"\\n\";\n  $a = new stdClass;\n  $b = $a->b = array('original');\n  foreach($a->b as $k=>&$v) {\n     $v = 'changed';\n  }\n  var_dump($b);\n  unset($a, $b);\n  echo \"\\n\" . '$a->b->c' . \"\\n\";\n  $a = new stdClass;\n  $a->b = new stdClass;\n  $b = $a->b->c = array('original');\n  foreach($a->b as $k=>&$v) {\n     $v = 'changed';\n  }\n  var_dump($b);\n  unset($a, $b);\n  echo \"\\n\" . '$a->b[0]' . \"\\n\";\n  $a = new stdClass;\n  $b = $a->b[0] = array('original');\n  foreach($a->b[0] as $k=>&$v) {\n     $v = 'changed';\n  }\n  var_dump($b);\n  unset($a, $b);\n  echo \"\\n\" . '$a->b[0][0]' . \"\\n\";\n  $a = new stdClass;\n  $b = $a->b[0][0] = array('original');\n  foreach($a->b[0][0] as $k=>&$v) {\n     $v = 'changed';\n  }\n  var_dump($b);\n  unset($a, $b);\n  echo \"\\n\" . '$a->b[0]->c' . \"\\n\";\n  $a = new stdClass;\n  $a->b[0] = new stdClass;\n  $b = $a->b[0]->c = array('original');\n  foreach($a->b[0]->c as $k=>&$v) {\n     $v = 'changed';\n  }\n  var_dump($b);\n  unset($a, $b);\n  class C {\n    public static $a;\n  }\n  echo \"\\n\" . 'C::$a' . \"\\n\";\n  C::$a = array('original');\n  $b = C::$a;\n  foreach(C::$a as $k=>&$v) {\n     $v = 'changed';\n  }\n  var_dump($b);\n  unset($a, $b);\n  echo \"\\n\" . 'C::$a[0]' . \"\\n\";\n  C::$a[0] = array('original');\n  $b = C::$a[0];\n  foreach(C::$a[0] as $k=>&$v) {\n     $v = 'changed';\n  }\n  var_dump($b);\n  unset(C::$a[0], $b);\n  echo \"\\n\" . 'C::$a[0]->b' . \"\\n\";\n  C::$a[0] = new stdClass;\n  C::$a[0]->b = array('original');\n  $b = C::$a[0]->b;\n  foreach(C::$a[0]->b as $k=>&$v) {\n     $v = 'changed';\n  }\n  var_dump($b);\n  unset(C::$a[0]->b, $b);\n?>")).toMatchSnapshot();
  });
});
