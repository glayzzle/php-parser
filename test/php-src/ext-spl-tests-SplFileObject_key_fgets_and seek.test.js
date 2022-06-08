// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_key_fgets_and seek.phpt
  it("SplFileObject verify interactions between seeking, getting the key and fgets", function () {
    expect(parser.parseCode("<?php\n$file = new SplTempFileObject();\nfor ($i = 0; $i < 100; $i++) {\n    $file->fwrite(\"Foo $i\\n\");\n}\n$file->seek(50);\nvar_dump(\n    ['line' => $file->key(), 'contents' => trim($file->fgets())],\n    ['line' => $file->key(), 'contents' => trim($file->fgets())],\n    ['line' => $file->key(), 'contents' => trim($file->fgets())],\n);\n?>")).toMatchSnapshot();
  });
});
