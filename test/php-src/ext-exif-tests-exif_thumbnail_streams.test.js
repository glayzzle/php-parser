// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif_thumbnail_streams.phpt
  it("exif_thumbnail() with streams test", function () {
    expect(parser.parseCode("<?php\n$fp = fopen(__DIR__ . '/sony.jpg', 'rb');\nvar_dump(strlen(exif_thumbnail($fp)));\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
