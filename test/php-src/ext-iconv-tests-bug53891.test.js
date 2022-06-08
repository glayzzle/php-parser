// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug53891.phpt
  it("Bug #53891 (iconv_mime_encode() fails to Q-encode UTF-8 string)", function () {
    expect(parser.parseCode("<?php\n$preferences = array(\n    'scheme' => 'Q',\n    'input-charset'  => 'utf-8',\n    'output-charset' => 'utf-8',\n    'line-length' => 74,\n    'line-break-chars' => \"\\r\\n\",\n);\nvar_dump(iconv_mime_encode('subject', \"d obeybiubrsfqllpdtpge…\", $preferences));\n?>")).toMatchSnapshot();
  });
});
