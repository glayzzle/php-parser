// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/filesize_variation1-win32-mb.phpt
  it("Test filesize() function: usage variations - size of files", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\nrequire($file_path.\"/file.inc\");\necho \"*** Testing filesize(): usage variations ***\\n\";\necho \"*** Checking filesize() with different size of files ***\\n\";\nfor($size = 1; $size <10000; $size = $size+1000)\n{\n  create_files($file_path, 1, \"numeric\", 0755, $size, \"w\", \"私はガラスを食べられますfilesize_variation\");\n  var_dump( filesize( $file_path.\"/私はガラスを食べられますfilesize_variation1.tmp\") );\n  clearstatcache();\n  delete_files($file_path, 1, \"私はガラスを食べられますfilesize_variation\");\n}\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
