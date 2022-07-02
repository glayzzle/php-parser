// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug78326_1.phpt
  it("proper string length on stream_get_contents()", function () {
    expect(parser.parseCode("<?php\n$f = fopen('php://memory', 'rw');\nfwrite($f, str_repeat('X', 1000));\nfseek($f, 0);\nvar_dump(strlen(stream_get_contents($f, 1024)));\n?>")).toMatchSnapshot();
  });
});
