// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_fputcsv_variation15.phpt
  it("SplFileObject::fputcsv() with empty $escape", function () {
    expect(parser.parseCode("<?php\n$data = array(\n    ['\\\\'],\n    ['\\\\\"']\n);\n$file = new SplTempFileObject;\nforeach ($data as $record) {\n    $file->fputcsv($record, ',', '\"', '');\n}\n$file->rewind();\nforeach ($file as $line) {\n    echo $line;\n}\n?>")).toMatchSnapshot();
  });
});
