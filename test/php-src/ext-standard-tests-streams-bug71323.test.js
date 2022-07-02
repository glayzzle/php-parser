// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug71323.phpt
  it("Bug #71323: Output of stream_get_meta_data can be falsified by its input", function () {
    expect(parser.parseCode("<?php\n$file = 'data:text/plain;z=y;uri=eviluri;mediatype=wut?;mediatype2=hello,somedata';\n$meta = stream_get_meta_data(fopen($file, \"r\"));\nvar_dump($meta);\n?>")).toMatchSnapshot();
  });
});
