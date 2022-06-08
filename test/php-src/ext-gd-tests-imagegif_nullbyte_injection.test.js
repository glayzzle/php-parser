// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagegif_nullbyte_injection.phpt
  it("Testing null byte injection in imagegif", function () {
    expect(parser.parseCode("<?php\n$image = imagecreate(1,1);// 1px image\ntry {\n    imagegif($image, \"./foo\\0bar\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
