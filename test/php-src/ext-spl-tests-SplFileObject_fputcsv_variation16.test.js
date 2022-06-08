// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_fputcsv_variation16.phpt
  it("SplFileObject::fputcsv() with user provided eol", function () {
    expect(parser.parseCode("<?php\n$data = [\n    ['aaa', 'bbb', 'ccc', 'dddd'],\n    ['123', '456', '789'],\n    ['\"aaa\"', '\"bbb\"'],\n];\n$eol_chars = ['||', '|', '\\n', \"\\n\"];\nforeach ($eol_chars as $eol_char) {\n  $file = new SplTempFileObject;\n    foreach ($data as $record) {\n        $file->fputcsv($record, ',', '\"', '', $eol_char);\n    }\n    $file->rewind();\n    foreach ($file as $line) {\n        echo $line;\n    }\n    \n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
