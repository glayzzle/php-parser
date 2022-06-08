// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_fgetcsv_escape_empty.phpt
  it("SplFileObject::fgetcsv() with empty $escape", function () {
    expect(parser.parseCode("<?php\n$contents = <<<EOS\n\"cell1\",\"cell2\\\\\",\"cell3\",\"cell4\"\n\"\\\\\\\\\\\\line1\nline2\\\\\\\\\\\\\"\nEOS;\n$file = new SplTempFileObject;\n$file->fwrite($contents);\n$file->rewind();\nwhile (($data = $file->fgetcsv(',', '\"', ''))) {\n    print_r($data);\n}\n?>")).toMatchSnapshot();
  });
});
