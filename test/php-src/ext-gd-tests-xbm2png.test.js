// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/xbm2png.phpt
  it("xbm --> png conversion test", function () {
    expect(parser.parseCode("<?php\n    $cwd = __DIR__;\n    echo \"XBM to PNG conversion: \";\n    echo imagepng(imagecreatefromxbm($cwd . \"/conv_test.xbm\"), $cwd . \"/test_xbm.png\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    @unlink($cwd . \"/test_xbm.png\");\n?>")).toMatchSnapshot();
  });
});
