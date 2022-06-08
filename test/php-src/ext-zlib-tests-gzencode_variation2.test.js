// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzencode_variation2.phpt
  it("Test gzencode() function : variation - verify header contents with all encoding modes", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gzencode() : variation ***\\n\";\n$data = \"A small string to encode\\n\";\necho \"\\n-- Testing with each encoding_mode  --\\n\";\nvar_dump(bin2hex(gzencode($data, -1)));\nvar_dump(bin2hex(gzencode($data, -1, FORCE_GZIP)));\nvar_dump(bin2hex(gzencode($data, -1, FORCE_DEFLATE)));\n?>")).toMatchSnapshot();
  });
});
