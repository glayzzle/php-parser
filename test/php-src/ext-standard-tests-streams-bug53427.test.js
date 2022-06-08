// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug53427.phpt
  it("Bug #53427 (stream_select does not preserve keys)", function () {
    expect(parser.parseCode("<?php\n$read[1] = fopen(__FILE__, \"r\");\n$read[\"myindex\"] = reset($read);\n$write = NULL;\n$except = NULL;\nvar_dump($read);\nstream_select($read, $write, $except, 0);\nvar_dump($read);\n?>")).toMatchSnapshot();
  });
});
