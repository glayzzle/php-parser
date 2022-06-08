// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/parse_ini_file_error.phpt
  it("Test parse_ini_file() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing parse_ini_file() : error conditions ***\\n\";\n//Test parse_ini_file with one more than the expected number of arguments\necho \"\\n-- Testing parse_ini_file() function with more than expected no. of arguments --\\n\";\n$filename = 'string_val';\n$process_sections = true;\n$extra_arg = 10;\nvar_dump( parse_ini_file($filename, $process_sections, $extra_arg) );\necho \"\\n-- Testing parse_ini_file() function with a non-existent file --\\n\";\n$filename = __FILE__ . 'invalidfilename';\nvar_dump( parse_ini_file($filename, $process_sections) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
