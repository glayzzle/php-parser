// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/readlink_realpath_variation3.phpt
  it("Test readlink() and realpath() functions: usage variation - invalid args", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing readlink() and realpath() : usage variations ***\\n\";\necho \"\\n*** Testing readlink() and realpath() with linkname as empty string, NULL and single space ***\\n\";\n$link_string = array (\n  /* linkname as spaces */\n  \" \",\n  ' ',\n  /* empty linkname */\n  \"\",\n  '',\n );\nfor($loop_counter = 0; $loop_counter < count($link_string); $loop_counter++) {\n  echo \"-- Iteration\";\n  echo $loop_counter + 1;\n  echo \" --\\n\";\n  var_dump( readlink($link_string[$loop_counter]) );\n  var_dump( realpath($link_string[$loop_counter]) );\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
