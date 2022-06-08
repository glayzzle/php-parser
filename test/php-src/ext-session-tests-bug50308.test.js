// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug50308.phpt
  it("Bug #50308 (session id not appended properly for empty anchor tags)", function () {
    expect(parser.parseCode("<?php\n@session_start();\n?>\n<a href=\"\"/>\n<a href=\"\" />\n<a href=\"foo\"/>\n<a href=\"foo\" />\n<a href=foo/>\n<a href=\"/\">\n<a href=/>\n<a href=?foo=bar/>\n<a href=\"?foo=bar\"/>\n<a href=./>\n<a href=\"./\">")).toMatchSnapshot();
  });
});
