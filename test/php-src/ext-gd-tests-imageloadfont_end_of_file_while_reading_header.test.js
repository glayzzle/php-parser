// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imageloadfont_end_of_file_while_reading_header.phpt
  it("imageloadfont() \"End of file while reading header\"", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ .  '/font.gdf';\n// End of file while reading header\n$bin = \"\\x41\\x41\\x41\\x41\\x00\\x00\\x00\\x00\\x00\\x00\";\n$fp = fopen($filename, 'wb');\nfwrite($fp, $bin);\nfclose($fp);\n$font = imageloadfont($filename);\n// Error while reading header\n$bin = \"\\xe0\\x00\\x00\\x00\\x20\\x00\\x00\\x00\\x06\\x00\\x00\\x00\\x0a\\x00\\x00\";\n$fp = fopen($filename, 'wb');\nfwrite($fp, $bin);\nfclose($fp);\n$font = imageloadfont($filename);\n?>")).toMatchSnapshot();
  });
});
