// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_recursive_iterator_iterator_key_case.phpt
  it("SPL: Test on RecursiveIteratorIterator key function checking switch statements", function () {
    expect(parser.parseCode("<?php\n  $ar = array(\"one\"=>1, \"two\"=>2, \"three\"=>array(\"four\"=>4, \"five\"=>5, \"six\"=>array(\"seven\"=>7)), \"eight\"=>8, -100 => 10, NULL => \"null\");\n  $it = new RecursiveArrayIterator($ar);\n  $it = new RecursiveIteratorIterator($it);\n  foreach($it as $k=>$v)\n  {\n    echo \"$k=>$v\\n\";\n    var_dump($k);\n  }\n?>")).toMatchSnapshot();
  });
});
