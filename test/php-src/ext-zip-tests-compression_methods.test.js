// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/compression_methods.phpt
  it("Recognition of compression methods", function () {
    expect(parser.parseCode("<?php\n$methods = array(\n    'store'     => ZipArchive::CM_STORE,\n    'deflate'   => ZipArchive::CM_DEFLATE,\n    'deflate64' => ZipArchive::CM_DEFLATE64,\n    'bzip2'     => ZipArchive::CM_BZIP2,\n    'lzma'      => ZipArchive::CM_LZMA,\n    'ppmd'      => ZipArchive::CM_PPMD\n);\n$zip = new ZipArchive();\n$zip->open(__DIR__ . '/compression_methods.zip');\nforeach ($methods as $filename => $method) {\n    echo \"$filename: \";\n    var_dump($zip->statName($filename)['comp_method'] === $method);\n}\n$zip->close();\n?>")).toMatchSnapshot();
  });
});
