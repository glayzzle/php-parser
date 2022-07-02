// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug54946.phpt
  it("Bug#54946 stream_get_contents infinite loop", function () {
    expect(parser.parseCode("<?php\n$filename = tempnam(__DIR__, \"phpbug\");\n$stream = fopen($filename, \"w\"); // w or a\n$retval = stream_get_contents($stream, 1, 1);\nfclose($stream);\nvar_dump($retval);\nunlink($filename);\n$filename = tempnam(__DIR__, \"phpbug2\");\n$stream = fopen($filename, \"a\");\n$retval = stream_get_contents($stream, 1, 1);\nvar_dump($retval);\nfclose($stream);\nunlink($filename);\n$filename = tempnam(__DIR__, \"phpbug3\");\n$stream = fopen($filename, \"a\");\nfseek($stream, 1);\n$retval = stream_get_contents($stream, 1);\nvar_dump($retval);\nfclose($stream);\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
