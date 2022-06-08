// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug62885.phpt
  it("Bug #62885 (mysqli_poll - Segmentation fault)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n$tablica = array();\n$test1 = mysqli_poll($test2, $test3, $tablica, 0);\n$test2 = array();\n$test2 = array();\n$test1 = mysqli_poll($test2, $test3, $tablica, 0);\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
