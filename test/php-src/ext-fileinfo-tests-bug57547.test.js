// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug57547.phpt
  it("Bug #57547 Settings options on file doesn't give same result as constructor options", function () {
    expect(parser.parseCode("<?php\n$filenames = array(\"..\", __FILE__);\nforeach ($filenames as $filename) {\n    $finfo = new finfo(FILEINFO_MIME);\n    var_dump($finfo->file($filename));\n    $finfo2 = new finfo();\n    var_dump($finfo2->file($filename, FILEINFO_MIME));\n}\n?>")).toMatchSnapshot();
  });
});
