// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/utf8.phpt
  it("UTF-8<->ISO Latin 1 encoding/decoding test", function () {
    expect(parser.parseCode("<?php\nprintf(\"%s -> %s\\n\", urlencode(\"�\"), urlencode(utf8_encode(\"�\")));\nprintf(\"%s <- %s\\n\", urlencode(utf8_decode(urldecode(\"%C3%A6\"))), \"%C3%A6\");\n?>")).toMatchSnapshot();
  });
});
