// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/stream_001.phpt
  it("stream_wrapper_unregister() & stream_wrapper_restore()", function () {
    expect(parser.parseCode("<?php\nvar_dump(stream_wrapper_unregister('file'));\nvar_dump(fopen(\"file://\".__FILE__, \"r\"));\nvar_dump(stream_wrapper_restore('file'));\nvar_dump(fopen(\"file://\".__FILE__, \"r\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
