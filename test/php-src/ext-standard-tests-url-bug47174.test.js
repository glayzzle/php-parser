// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/bug47174.phpt
  it("Bug #47174 (base64_decode() interprets pad char in mid string as terminator)", function () {
    expect(parser.parseCode("<?php\nif (base64_decode(\"dGVzdA==\") == base64_decode(\"dGVzdA==CRAP\")) {\n    echo \"Same octet data - Signature Valid\\n\";\n} else {\n    echo \"Invalid Signature\\n\";\n}\n$in = base64_encode(\"foo\") . '==' . base64_encode(\"bar\");\nvar_dump($in, base64_decode($in));\n?>")).toMatchSnapshot();
  });
});
