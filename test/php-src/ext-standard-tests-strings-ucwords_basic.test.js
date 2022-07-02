// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/ucwords_basic.phpt
  it("Test ucwords() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ucwords() : basic functionality ***\\n\";\n// lines with different whitespace character\n$str_array = array(\n \"testing ucwords\",\n 'testing ucwords',\n 'testing\\tucwords',\n \"testing\\tucwords\",\n \"testing\\nucwords\",\n 'testing\\nucwords',\n \"testing\\vucwords\",\n 'testing\\vucwords',\n \"testing\",\n 'testing',\n ' testing',\n \" testing\",\n \"testing  ucwords\",\n 'testing  ucwords',\n 'testing\\rucwords',\n \"testing\\rucwords\",\n 'testing\\fucwords',\n \"testing\\fucwords\"\n);\n// loop through the $strings array to test ucwords on each element\n$iteration = 1;\nfor($index = 0; $index < count($str_array); $index++) {\n  echo \"-- Iteration $iteration --\\n\";\n  var_dump( ucwords($str_array[$index]) );\n  $iteration++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
