// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_get_contents_file_put_contents_error.phpt
  it("Test file-get_contents() and file_put_contents() functions : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing error conditions ***\\n\";\n$file_path = __DIR__;\necho \"\\n-- Testing with  Non-existing file --\\n\";\nprint( file_get_contents(\"/no/such/file/or/dir\") );\n$file_handle = fopen($file_path.\"/file_put_contents.tmp\", \"w\");\necho \"\\n-- Testing for invalid negative maxlen values --\\n\";\nfile_put_contents($file_path.\"/file_put_contents1.tmp\", \"Garbage data in the file\");\ntry {\n    file_get_contents($file_path.\"/file_put_contents1.tmp\", FALSE, NULL, 0, -5);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nfclose($file_handle);\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
