// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/sony.phpt
  it("Sony test", function () {
    expect(parser.parseCode("<?php\n$data = exif_read_data(__DIR__ . DIRECTORY_SEPARATOR . 'sony.jpg');\nif (!$data) {\n    exit('Error: Unable to parse EXIF data');\n}\n// Perhaps we should just test for SonyModelID since it seems to be\n// the most specific tag name that should be found in any Sony generated\n// picture\nforeach (['SonyModelID', 'Panorama', 'AntiBlur'] as $sony_tag) {\n    printf('%s was %sfound' . PHP_EOL, $sony_tag, (!isset($data[$sony_tag]) ? 'NOT ' : ''));\n}\n?>")).toMatchSnapshot();
  });
});
