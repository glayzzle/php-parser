// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif_read_data_streams.phpt
  it("exif_read_data() with streams test", function () {
    expect(parser.parseCode("<?php\n$fp = fopen(__DIR__ . '/image027.tiff', 'rb');\nvar_dump(exif_read_data($fp));\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
