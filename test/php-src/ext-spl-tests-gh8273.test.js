// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/gh8273.phpt
  it("GH-8273 (SplFileObject: key() returns wrong value)", function () {
    expect(parser.parseCode("<?php\n$file = new SplTempFileObject();\n// write to file\nfor ($i = 0; $i < 5; $i++) {\n    $file->fwrite(\"line {$i}\" . PHP_EOL);\n}\n// read from file\n$file->rewind();\nwhile ($file->valid()) {\n    echo $file->key(), ': ', $file->fgets();\n}\n?>")).toMatchSnapshot();
  });
});
