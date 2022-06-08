// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/natcasesort_basic.phpt
  it("Test natcasesort() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of natcasesort()\n */\necho \"*** Testing natcasesort() : basic functionality ***\\n\";\n$array = array ('A01', 'a1', 'b10',  'a01', 'b01');\necho \"\\n-- Before sorting: --\\n\";\nvar_dump($array);\necho \"\\n-- After Sorting: --\\n\";\nvar_dump(natcasesort($array));\nvar_dump($array);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
