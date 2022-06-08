// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagejpeg_nullbyte_injection.phpt
  it("Testing null byte injection in imagejpeg", function () {
    expect(parser.parseCode("<?php\n$image = imagecreate(1,1);// 1px image\ntry {\n    imagejpeg($image, \"./foo\\0bar\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
