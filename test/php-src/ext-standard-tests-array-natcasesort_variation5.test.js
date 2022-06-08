// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/natcasesort_variation5.phpt
  it("Test natcasesort() function : usage variations - different hex values", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass an array of different hex values to test how natcasesort() re-orders it\n */\necho \"*** Testing natcasesort() : usage variation ***\\n\";\n$unsorted_hex_array = array(0x1AB, 0xFFF, 0xF, 0xFF, 0x2AA, 0xBB, 0x1ab, 0xff, -0xFF, 0, -0x2aa);\nvar_dump( natcasesort($unsorted_hex_array) );\nvar_dump($unsorted_hex_array);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
