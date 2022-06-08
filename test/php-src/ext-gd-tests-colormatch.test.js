// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/colormatch.phpt
  it("imagecolormatch", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(5,5);\n$im2 = imagecreate(5,5);\ntry {\n    imagecolormatch($im, $im2);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"ok\\n\";\nimagedestroy($im);\n?>")).toMatchSnapshot();
  });
});
