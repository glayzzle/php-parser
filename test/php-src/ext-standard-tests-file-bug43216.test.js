// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug43216.phpt
  it("Bug #43216 (stream_is_local() returns false on file://)", function () {
    expect(parser.parseCode("<?php\nvar_dump(stream_is_local(\"file://\"));\n?>")).toMatchSnapshot();
  });
});
