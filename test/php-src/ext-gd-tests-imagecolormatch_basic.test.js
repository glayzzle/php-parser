// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecolormatch_basic.phpt
  it("Basic test imagecolormatch() of GD library", function () {
    expect(parser.parseCode("<?php\n$ima = imagecreatetruecolor(110, 20);\n$background_color = imagecolorallocate($ima, 0, 0, 0);\n$imb = imagecreate(110, 20);\n$background_color = imagecolorallocate($imb, 0, 0, 100);\nvar_dump(imagecolormatch($ima, $imb));\n?>")).toMatchSnapshot();
  });
});
