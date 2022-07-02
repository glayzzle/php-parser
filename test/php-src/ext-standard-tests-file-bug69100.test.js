// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug69100.phpt
  it("Bug #69100: Bus error from stream_copy_to_stream (file -> SSL stream) with invalid length", function () {
    expect(parser.parseCode("<?php\n$fileIn = __DIR__ . '/bug69100_in.txt';\n$fileOut = __DIR__ . '/bug69100_out.txt';\nfile_put_contents($fileIn, str_repeat('A', 64 * 1024));\n$fr = fopen($fileIn, 'rb');\n$fw = fopen($fileOut, 'w');\nvar_dump(stream_copy_to_stream($fr, $fw, 32 * 1024));\nvar_dump(stream_copy_to_stream($fr, $fw, 64 * 1024));\nfclose($fr);\nfclose($fw);\nunlink($fileIn);\nunlink($fileOut);\n?>")).toMatchSnapshot();
  });
});
