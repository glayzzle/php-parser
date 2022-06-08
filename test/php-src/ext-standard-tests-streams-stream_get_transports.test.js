// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_get_transports.phpt
  it("array stream_get_transports ( void );", function () {
    expect(parser.parseCode("<?php\nprint((is_array(stream_get_transports())) ? (\"yes\") : (\"Test 'array stream_get_transports ( void );' has failed\"));\n?>")).toMatchSnapshot();
  });
});
