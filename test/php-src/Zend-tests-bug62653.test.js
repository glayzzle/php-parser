// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug62653.phpt
  it("Bug #62653: unset($array[$float]) causes a crash", function () {
    expect(parser.parseCode("<?php\n$array = array(\"5\"=>\"bar\");\n$foo = \"10.0000\"; // gettype($foo) = \"string\"\n$foo /= 2; //Makes $foo = 5 but still gettype($foo) = \"double\"\nunset($array[$foo]);\nprint_r($array);\n$array = array(\"5\"=>\"bar\");\n$foo = \"5\";\nunset($array[(float)$foo]);\nprint_r($array);\n$array = array(\"5\"=>\"bar\");\n$foo = \"10.0000\";\n$foo /= 2; //Makes $foo = 5 but still gettype($foo) = \"double\"\n$name = \"foo\";\nunset($array[$$name]);\nprint_r($array);\n?>")).toMatchSnapshot();
  });
});
