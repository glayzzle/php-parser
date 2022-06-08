// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_put_contents_variation1.phpt
  it("Test file_put_contents() function : variation - test append flag", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing file_put_contents() : variation ***\\n\";\n$filename = \"FilePutContentsVar1.tmp\";\n$data = \"The first string to write\";\n$extra = \", followed by this\";\nvar_dump(file_put_contents($filename, $data));\nvar_dump(file_put_contents($filename, $extra, FILE_APPEND));\necho filesize($filename).\"\\n\";\nreadfile($filename);\necho \"\\n\";\nclearstatcache();\nfile_put_contents($filename, $data);\necho filesize($filename).\"\\n\";\nreadfile($filename);\necho \"\\n\";\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
