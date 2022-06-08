// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/gif2gd.phpt
  it("gif --> gd1/gd2 conversion test", function () {
    expect(parser.parseCode("<?php\n    $cwd = __DIR__;\n    echo \"GIF to GD1 conversion: \";\n    echo imagegd(imagecreatefromgif($cwd . \"/conv_test.gif\"), $cwd . \"/test_gif.gd1\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    echo \"GIF to GD2 conversion: \";\n    echo imagegd2(imagecreatefromgif($cwd . \"/conv_test.gif\"), $cwd . \"/test_gif.gd2\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    @unlink($cwd . \"/test_gif.gd1\");\n    @unlink($cwd . \"/test_gif.gd2\");\n?>")).toMatchSnapshot();
  });
});
