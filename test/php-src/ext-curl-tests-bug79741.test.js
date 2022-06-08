// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug79741.phpt
  it("Bug #79741: curl_setopt CURLOPT_POSTFIELDS asserts on object with declared properties", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $prop = \"value\";\n}\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_POSTFIELDS, new Test);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
