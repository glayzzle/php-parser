// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/show_source_variation1.phpt
  it("Test function show_source() by calling it with its expected arguments and php output, more test for highlight_file()", function () {
    expect(parser.parseCode("<?php\necho \"*** Test by calling method or function with its expected arguments and php output ***\\n\";\n$foo = 'bar';\n$baz = \"something \".$foo.\"\\n\";\nif ( $foo == 'bar' )\n{\n  $baz = \"baz\\n\";\n}\n /* some code here */\necho $baz;\nshow_source(__FILE__);\necho $foo;\n?>")).toMatchSnapshot();
  });
});
