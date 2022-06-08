// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/show_source_variation2.phpt
  it("Test function show_source() by calling it with its expected arguments and output to variable, more test for highlight_file()", function () {
    expect(parser.parseCode("<?php\necho \"*** Test by calling method or function with its expected arguments and output to variable ***\\n\";\n$foo = 'bar';\n$baz = \"something \".$foo.\"\\n\";\nif ( $foo == 'bar' )\n{\n  $baz = \"baz\\n\";\n}\n /* some code here */\n$source = show_source(__FILE__, true);\nvar_dump($source);\n?>")).toMatchSnapshot();
  });
});
