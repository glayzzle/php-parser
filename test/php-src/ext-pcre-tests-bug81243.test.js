// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug81243.phpt
  it("Bug #81243 (Too much memory is allocated for preg_replace())", function () {
    expect(parser.parseCode("<?php\n$test_string = str_repeat('Eins zwei drei', 2000);\n$replaced = preg_replace('/\\s/', '-', $test_string);\n$mem0 = memory_get_usage();\n$replaced = str_repeat($replaced, 1);\n$mem1 = memory_get_usage();\nvar_dump($mem0 == $mem1);\n$replaced = preg_replace_callback('/\\s/', function ($_) {return '-';}, $test_string);\n$mem0 = memory_get_usage();\n$replaced = str_repeat($replaced, 1);\n$mem1 = memory_get_usage();\nvar_dump($mem0 == $mem1);\n?>")).toMatchSnapshot();
  });
});
