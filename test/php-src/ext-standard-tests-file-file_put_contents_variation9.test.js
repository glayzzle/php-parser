// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_put_contents_variation9.phpt
  it("est file_put_contents() function : usage variation - linked files", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing file_put_contents() : usage variation ***\\n\";\n$filename = __DIR__.'/filePutContentsVar9.tmp';\n$softlink = __DIR__.'/filePutContentsVar9.SoftLink';\n$hardlink = __DIR__.'/filePutContentsVar9.HardLink';\n$chainlink = __DIR__.'/filePutContentsVar9.ChainLink';\n// link files even though it original file doesn't exist yet\nsymlink($filename, $softlink);\nsymlink($softlink, $chainlink);\n// perform tests\nrun_test($chainlink);\nrun_test($softlink);\n//can only create a hardlink if the file exists.\nfile_put_contents($filename,\"\");\nlink($filename, $hardlink);\nrun_test($hardlink);\nunlink($chainlink);\nunlink($softlink);\nunlink($hardlink);\nunlink($filename);\nfunction run_test($file) {\n    $data = \"Here is some data\";\n    $extra = \", more data\";\n    var_dump(file_put_contents($file, $data));\n    var_dump(file_put_contents($file, $extra, FILE_APPEND));\n    readfile($file);\n    echo \"\\n\";\n}\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
