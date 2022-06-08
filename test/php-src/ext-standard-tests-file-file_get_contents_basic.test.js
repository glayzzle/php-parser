// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_get_contents_basic.phpt
  it("file_get_contents() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\ninclude($file_path.\"/file.inc\");\necho \"*** Testing the basic functionality of the file_get_contents() function ***\\n\";\necho \"-- Testing with simple valid data file --\\n\";\ncreate_files($file_path, 1, \"text\", 0755, 100, \"w\", \"file\", 1, \"byte\");\nvar_dump( file_get_contents($file_path.\"/file1.tmp\") );\ndelete_files($file_path, 1);\necho \"\\n-- Testing with empty file --\\n\";\ncreate_files($file_path, 1, \"empty\", 0755, 100, \"w\", \"file\", 1, \"byte\");\nvar_dump( file_get_contents($file_path.\"/file1.tmp\") );\ndelete_files($file_path, 1);\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
