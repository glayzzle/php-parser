// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug77147.phpt
  it("Bug #77147 (Fixing 60494 ignored ICONV_MIME_DECODE_CONTINUE_ON_ERROR)", function () {
    expect(parser.parseCode("<?php\n$string = <<<EOF\nFeedback-ID: 014a93e3-1f5e-4df6-b347-6b59f0f746b8:b5891053-55d1-45bc-a0b5-47a7a9b59687:email:epslh1�\nEOF;\n$headers = iconv_mime_decode_headers($string, ICONV_MIME_DECODE_CONTINUE_ON_ERROR);\nvar_dump($headers);\n?>")).toMatchSnapshot();
  });
});
