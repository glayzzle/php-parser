// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug77024.phpt
  it("Bug #77024 SplFileObject::__toString() may return array", function () {
    expect(parser.parseCode("<?php\n$file = new SplTempFileObject;\n$file->fputcsv(['foo', 'bar', 'baz']);\n$file->rewind();\n$file->setFlags(SplFileObject::READ_CSV);\necho $file . \"\\n\";\n$tmp = tempnam(sys_get_temp_dir(), \"php-tests-\");\nfile_put_contents($tmp, \"line1\\nline2\\nline3\\n\");\n$file = new SplFileObject($tmp);\n$file->rewind();\necho $file . \"\\n\";\nunset($file);\nunlink($tmp);\n?>")).toMatchSnapshot();
  });
});
