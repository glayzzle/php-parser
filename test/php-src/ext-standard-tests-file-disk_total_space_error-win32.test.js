// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/disk_total_space_error-win32.phpt
  it("Test disk_total_space() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing error conditions ***\\n\";\n$file_path = __DIR__;\nvar_dump( disk_total_space( $file_path.\"/dir1\" )); // Invalid directory\n$fh = fopen( $file_path.\"/disk_total_space.tmp\", \"w\" );\nfwrite( $fh, \" Garbage data for the temporary file\" );\nvar_dump( disk_total_space( $file_path.\"/disk_total_space.tmp\" )); // file input instead of directory\nfclose($fh);\necho\"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
