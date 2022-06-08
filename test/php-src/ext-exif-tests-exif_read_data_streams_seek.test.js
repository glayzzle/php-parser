// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif_read_data_streams_seek.phpt
  it("exif_read_data() with streams seeking test", function () {
    expect(parser.parseCode("<?php\n$fp = fopen(__DIR__ . '/image027.tiff', 'rb');\nfseek($fp, 100, SEEK_SET);\nexif_read_data($fp);\nvar_dump(ftell($fp) === 100);\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
