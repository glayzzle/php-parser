// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecolormatch_error2.phpt
  it("Send not TrueColor to Image 1 parameter imagecolormatch() of GD library", function () {
    expect(parser.parseCode("<?php\n$ima = imagecreate(110, 20);\n$background_color = imagecolorallocate($ima, 0, 0, 0);\n$imb = imagecreate(110, 20);\n$background_color = imagecolorallocate($imb, 0, 0, 100);\ntry {\n    imagecolormatch($ima, $imb);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
