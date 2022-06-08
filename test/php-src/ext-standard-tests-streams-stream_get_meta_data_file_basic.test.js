// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_get_meta_data_file_basic.phpt
  it("stream_get_meta_data() basic functionality", function () {
    expect(parser.parseCode("<?php\n$fp = fopen(__FILE__, \"r\");\nvar_dump(stream_get_meta_data($fp));\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
