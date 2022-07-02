// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/unlink_variation6.phpt
  it("Test unlink() function : variation", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing unlink() : variation: contexts and relative files ***\\n\";\n// test relative directories and stream contexts.\n$subdir = 'subdir';\n$testfile = $subdir.'/testfile.txt';\nmkdir($subdir);\ntouch($testfile);\nf_exists($testfile);\n$context = stream_context_create();\nvar_dump(unlink($testfile, $context));\nf_exists($testfile);\nrmdir($subdir);\nfunction f_exists($file) {\n   if (file_exists($file) == true) {\n      echo \"$file exists\\n\";\n   }\n   else {\n      echo \"$file doesn't exist\\n\";\n   }\n}\n?>")).toMatchSnapshot();
  });
});
