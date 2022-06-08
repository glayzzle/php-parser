// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/natcasesort_variation10.phpt
  it("Test natcasesort() function : usage variations - position of internal array pointer", function () {
    expect(parser.parseCode("<?php\n/*\n * Check position of internal array pointer after calling natcasesort()\n */\necho \"*** Testing natcasesort() : usage variations ***\\n\";\n$array_arg = array ('img13', 'img20', 'img2', 'img1');\necho \"\\n-- Initial Position of Internal Pointer: --\\n\";\necho key($array_arg) . \" => \" . current ($array_arg) . \"\\n\";\necho \"\\n-- Call natcasesort() --\\n\";\nvar_dump(natcasesort($array_arg));\nvar_dump($array_arg);\necho \"\\n-- Position of Internal Pointer in Passed Array: --\\n\";\necho key($array_arg) . \" => \" . current ($array_arg) . \"\\n\";\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
