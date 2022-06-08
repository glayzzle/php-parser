// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/006.phpt
  it("Test array_pop behaviour", function () {
    expect(parser.parseCode("<?php\n$a = array(\"foo\", \"bar\", \"fubar\");\n$b = array(\"3\" => \"foo\", \"4\" => \"bar\", \"5\" => \"fubar\");\n$c = array(\"a\" => \"foo\", \"b\" => \"bar\", \"c\" => \"fubar\");\n/* simple array */\necho array_pop($a), \"\\n\";\narray_push($a, \"foobar\");\nvar_dump($a);\n/* numerical assoc indices */\necho array_pop($b), \"\\n\";\nvar_dump($b);\n/* assoc indices */\necho array_pop($c), \"\\n\";\nvar_dump($c);\n?>")).toMatchSnapshot();
  });
});
