// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_get_contents_error.phpt
  it("Test file_get_contents() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing error conditions ***\\n\";\n$file_path = __DIR__;\ninclude($file_path.\"/file.inc\");\necho \"\\n-- Testing with  Non-existing file --\\n\";\nprint( file_get_contents(\"/no/such/file/or/dir\") );\ncreate_files($file_path, 1, \"text\", 0755, 100, \"w\", \"file\", 1, \"byte\");\n$file_handle = fopen($file_path.\"/file_put_contents_error.tmp\", \"w\");\necho \"\\n-- Testing for invalid negative maxlen values --\\n\";\ntry {\n    file_get_contents($file_path.\"/file1.tmp\", FALSE, $file_handle, 0, -5);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ndelete_files($file_path, 1);\nfclose($file_handle);\nunlink($file_path.\"/file_put_contents_error.tmp\");\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
