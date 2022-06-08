// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug72735/bug72682.phpt
  it("Bug #72735 MakerNote regression", function () {
    expect(parser.parseCode("<?php\nforeach (['nokia.jpg', 'samsung.jpg', 'panasonic.jpg'] as $picture) {\n    echo $picture . ': ';\n    $info = exif_read_data(__DIR__ . DIRECTORY_SEPARATOR . $picture);\n    var_dump($info['MakerNote']);\n}\n?>")).toMatchSnapshot();
  });
});
