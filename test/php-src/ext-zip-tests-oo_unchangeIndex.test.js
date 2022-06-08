// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_unchangeIndex.phpt
  it("Test basic ZipArchive::unchangeIndex() Method", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\n$file = $dirname . 'oo_unchangeIndex.zip';\ncopy($dirname.'test.zip', $file);\nvar_dump(md5_file($file));\n$zip = new ZipArchive();\n$zip->open($file);\nvar_dump($zip->getNameIndex(0));\nvar_dump($zip->getCommentIndex(0));\n$zip->renameIndex(0, 'baz filename');\n$zip->setCommentIndex(0, 'baz comment');\nvar_dump($zip->getNameIndex(0));\nvar_dump($zip->getCommentIndex(0));\n$zip->unchangeIndex(0);\nvar_dump($zip->getNameIndex(0));\nvar_dump($zip->getCommentIndex(0));\n$zip->close();\nvar_dump(md5_file($file));\n?>")).toMatchSnapshot();
  });
});
