// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/get_included_files.phpt
  it("Test get_include_files() function", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing get_included_files()\\n\";\necho \"\\n-- List included files at start --\\n\";\nvar_dump(get_included_files());\ninclude(__DIR__.\"/get_included_files_inc1.inc\");\necho \"\\n-- List included files atfter including inc1 -\\n\";\nvar_dump(get_included_files());\ninclude(__DIR__.\"/get_included_files_inc2.inc\");\necho \"\\n-- List included files atfter including inc2 which will include inc3 which includes inc1 --\\n\";\nvar_dump(get_included_files());\n?>")).toMatchSnapshot();
  });
});
