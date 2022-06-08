// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_filter_variation8.phpt
  it("Test array_filter() function : usage variations - Callback function with different return values", function () {
    expect(parser.parseCode("<?php\n/*\n* callback functions are expected to return bool value for array_filter()\n* here testing callback functions for return values other than bool\n*/\necho \"*** Testing array_filter() : usage variations - callback function with different return values***\\n\";\n$input = array(0, 1, -1, 10, 100, 1000, 'Hello', null, true);\nfunction callback1($input)\n{\n  return 5;\n}\necho \"callback function with int return value\\n\";\nvar_dump( array_filter($input, 'callback1') );\n// float as return value\nfunction callback2($input)\n{\n  return 3.4;\n}\necho \"callback function with float return value\\n\";\nvar_dump( array_filter($input, 'callback2') );\n// string as return value\nfunction callback3($input)\n{\n  return 'value';\n}\necho \"callback function with string return value\\n\";\nvar_dump( array_filter($input, 'callback3') );\n// null as return value\nfunction callback4($input)\n{\n  return null;\n}\necho \"callback function with null return value\\n\";\nvar_dump( array_filter($input, 'callback4') );\n// array as return value\nfunction callback5($input)\n{\n  return array(8);\n}\necho \"callback function with array as return value\\n\";\nvar_dump( array_filter($input, 'callback5') );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
