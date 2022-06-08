// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug48289.phpt
  it("Bug #48289 (iconv_mime_encode() quoted-printable scheme is broken)", function () {
    expect(parser.parseCode("<?php\n$text = \"\\xE3\\x83\\x86\\xE3\\x82\\xB9\\xE3\\x83\\x88\\xE3\\x83\\x86\\xE3\\x82\\xB9\\xE3\\x83\\x88\";\n$options = array(\n    'scheme' => 'Q',\n    'input-charset' => 'UTF-8',\n    'output-charset' => 'UTF-8',\n    'line-length' => 30,\n);\necho iconv_mime_encode('Subject', $text, $options);\n?>")).toMatchSnapshot();
  });
});
