// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug53241.phpt
  it("Bug #53241 (stream casting that relies on fdopen/fopencookie fails with 'xb' mode)", function () {
    expect(parser.parseCode("<?php\n$fn = __DIR__ . \"/test.tmp\";\n@unlink($fn);\n$fh = fopen($fn, 'xb');\n$ch = curl_init('http://www.yahoo.com/');\nvar_dump(curl_setopt($ch, CURLOPT_FILE, $fh));\necho \"Done.\\n\";")).toMatchSnapshot();
  });
});
