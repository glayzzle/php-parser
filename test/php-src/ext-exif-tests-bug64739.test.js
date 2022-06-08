// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug64739.phpt
  it("Bug #64739 (Invalid Title and Author data returned)", function () {
    expect(parser.parseCode("<?php\necho \"Test\\n\";\n$headers1 = exif_read_data(__DIR__ . '/bug64739.jpg');\nif ($headers1 === false) {\n    echo 'Error, failed to read exif data';\n    exit;\n}\nvar_dump($headers1['Title'][0] === '?');\nvar_dump($headers1['Author'][0] === '?');\nini_set('exif.decode_unicode_motorola', 'UCS-2LE');\n$headers2 = exif_read_data(__DIR__ . '/bug64739.jpg');\nif ($headers2 === false) {\n    echo 'Error, failed to read exif data';\n    exit;\n}\nvar_dump($headers2['Title']);\nvar_dump($headers2['Author']);\n?>\nDone")).toMatchSnapshot();
  });
});
