// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/filesize_basic.phpt
  it("Test filesize() function: basic functionaity", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing size of files and directories with filesize() ***\\n\";\n$file_path = __DIR__;\nvar_dump( filesize(__FILE__) );\nvar_dump( filesize(\".\") );\n/* Empty file */\n$file_name = $file_path.\"/filesize_basic.tmp\";\n$file_handle = fopen($file_name, \"w\");\nfclose($file_handle);\nvar_dump( filesize($file_name) );\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
