// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/gif2png.phpt
  it("gif --> png conversion test", function () {
    expect(parser.parseCode("<?php\n    $cwd = __DIR__;\n    echo \"GIF to PNG conversion: \";\n    echo imagepng(imagecreatefromgif($cwd . \"/conv_test.gif\"), $cwd . \"/test_gif.png\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    @unlink($cwd . \"/test_gif.png\");\n?>")).toMatchSnapshot();
  });
});
