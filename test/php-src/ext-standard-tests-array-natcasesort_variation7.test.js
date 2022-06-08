// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/natcasesort_variation7.phpt
  it("Test natcasesort() function : usage variations - recursive arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass natcasesort() an infinitely recursive array to test how it is re-ordered\n */\necho \"*** Testing natcasesort() : usage variations ***\\n\";\n$array = array (1, 3.00, 'zero', '2');\n$array[] = &$array;\nvar_dump($array);\nvar_dump(@natcasesort($array));\nvar_dump($array);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
