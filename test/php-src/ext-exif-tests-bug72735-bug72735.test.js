// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug72735/bug72735.phpt
  it("Bug #72735 (Samsung picture thumb not read (zero size))", function () {
    expect(parser.parseCode("<?php\nforeach (['nokia.jpg', 'samsung.jpg', 'panasonic.jpg'] as $picture) {\n    echo $picture . ': ';\n    $len = strlen(exif_thumbnail(__DIR__ . DIRECTORY_SEPARATOR . $picture));\n    if (!$len) {\n        echo 'Error, no length returned', PHP_EOL;\n        continue;\n    }\n    echo 'int(' . $len . ')', PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
