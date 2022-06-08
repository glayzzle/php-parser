// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/base64_decode_basic_001.phpt
  it("Test base64_decode() function : basic functionality - ensure all base64 alphabet is supported.", function () {
    expect(parser.parseCode("<?php\necho \"Decode an input string containing the whole base64 alphabet:\\n\";\n$allbase64 = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/VV==\";\nvar_dump(bin2hex(base64_decode($allbase64)));\nvar_dump(bin2hex(base64_decode($allbase64, false)));\nvar_dump(bin2hex(base64_decode($allbase64, true)));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
