// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug81659.phpt
  it("Bug #81659 (stream_get_contents() may unnecessarily overallocate)", function () {
    expect(parser.parseCode("<?php\n$stream = fopen(__DIR__ . \"/81659.txt\", \"w+\");\nfor ($i = 0; $i < 1024; $i++) {\n    fwrite($stream, str_repeat(\"*\", 1024));\n}\nfseek($stream, 1023 * 1024);\n$m0 = memory_get_peak_usage();\nvar_dump(strlen(stream_get_contents($stream)));\n$m1 = memory_get_peak_usage();\nvar_dump($m1 < $m0 + 512 * 1024);\n?>")).toMatchSnapshot();
  });
});
