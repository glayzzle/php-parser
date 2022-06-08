// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug76943.phpt
  it("Bug #76943 (Inconsistent stream_wrapper_restore() errors)", function () {
    expect(parser.parseCode("<?php\nvar_dump(stream_wrapper_restore('foo'));\nvar_dump(stream_wrapper_restore('phar'));\nstream_wrapper_register('bar', 'stdClass');\nvar_dump(stream_wrapper_restore('foo'));\nvar_dump(stream_wrapper_restore('phar'));\n?>")).toMatchSnapshot();
  });
});
