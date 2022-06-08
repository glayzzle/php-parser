// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug72709.phpt
  it("Bug #72709 (imagesetstyle() causes OOB read for empty $styles)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(1, 1);\ntry {\n    var_dump(imagesetstyle($im, array()));\n}\ncatch (\\Error $ex) {\n    echo $ex->getMessage() . \"\\n\";\n}\nimagesetpixel($im, 0, 0, IMG_COLOR_STYLED);\nimagedestroy($im);\n?>\n====DONE====")).toMatchSnapshot();
  });
});
