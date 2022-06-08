// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug75785/bug75785.phpt
  it("Bug #75785 fix corrupt EXIF header issues; Related to mixed endianness. (Thank you @Richard Matzinger for providing the test photo)", function () {
    expect(parser.parseCode("<?php\n$mixedEndiannessFile = dirname(__FILE__).'/P1000506.JPG';\n$tags = exif_read_data($mixedEndiannessFile, 'EXIF', true, false);\necho $tags['GPS']['GPSLatitude'][0] . PHP_EOL;\necho $tags['GPS']['GPSLongitude'][0] . PHP_EOL;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
