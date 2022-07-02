// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug44805.phpt
  it("Bug#44806 (rename() function is not portable to Windows)", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__;\n$file1 = $dirname . DIRECTORY_SEPARATOR . \"file1.txt\";\n$file2 = $dirname . DIRECTORY_SEPARATOR . \"file2.txt\";\nfile_put_contents($file1, \"this is file 1\");\nfile_put_contents($file2, \"this is file 2\");\nrename($file1, $file2);\necho \"reading file 2: \";\nreadfile($file2);\nif (file_exists($file1)) {\n    unlink($file1);\n}\nif (file_exists($file2)) {\n    unlink($file2);\n}\n?>")).toMatchSnapshot();
  });
});
