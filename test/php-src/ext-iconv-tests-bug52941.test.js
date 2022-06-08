// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug52941.phpt
  it("Bug #52941 (The 'iconv_mime_decode_headers' function is skipping headers)", function () {
    expect(parser.parseCode("<?php\n$headers = <<<HEADERS\nFrom: =?UTF-8?B?PGZvb0BleGFtcGxlLmNvbT4=?=\nSubject: =?ks_c_5601-1987?B?UkU6odk=?=\nX-Foo: =?ks_c_5601-1987?B?UkU6odk=?= Foo\nX-Bar: =?ks_c_5601-1987?B?UkU6odk=?= =?UTF-8?Q?Foo?=\nTo: <test@example.com>\nHEADERS;\n$decoded = iconv_mime_decode_headers($headers, ICONV_MIME_DECODE_CONTINUE_ON_ERROR, 'UTF-8');\nvar_dump($decoded['From']);\nvar_dump($decoded['Subject']);\nvar_dump($decoded['X-Foo']);\nvar_dump($decoded['X-Bar']);\nvar_dump($decoded['To']);\n$decoded = iconv_mime_decode_headers($headers, ICONV_MIME_DECODE_CONTINUE_ON_ERROR | ICONV_MIME_DECODE_STRICT, 'UTF-8');\nvar_dump($decoded['From']);\nvar_dump($decoded['Subject']);\nvar_dump($decoded['X-Foo']);\nvar_dump($decoded['X-Bar']);\nvar_dump($decoded['To']);\n?>")).toMatchSnapshot();
  });
});
