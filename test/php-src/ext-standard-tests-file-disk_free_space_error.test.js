// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/disk_free_space_error.phpt
  it("Test disk_free_space and its alias diskfreespace() functions : error conditions.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing error conditions ***\\n\";\n$file_path = __DIR__;\nvar_dump( disk_free_space( $file_path.\"/dir1\" )); // Invalid directory\nvar_dump( diskfreespace( $file_path.\"/dir1\" ));\n$fh = fopen( $file_path.\"/disk_free_space.tmp\", \"w\" );\nfwrite( $fh, \" Garbage data for the temporary file\" );\nvar_dump( disk_free_space( $file_path.\"/disk_free_space.tmp\" )); // file input instead of directory\nvar_dump( diskfreespace( $file_path.\"/disk_free_space.tmp\" ));\nfclose($fh);\necho\"\\n-- Done --\";\n?>")).toMatchSnapshot();
  });
});
