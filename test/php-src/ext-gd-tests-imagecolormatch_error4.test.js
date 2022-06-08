// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecolormatch_error4.phpt
  it("using different image sizes imagecolormatch() of GD library", function () {
    expect(parser.parseCode("<?php\n$ima = imagecreatetruecolor(110, 20);\n$background_color = imagecolorallocate($ima, 0, 0, 0);\n$imb = imagecreate(100, 20);\n$background_color = imagecolorallocate($imb, 0, 0, 100);\ntry {\n    imagecolormatch($ima, $imb);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
