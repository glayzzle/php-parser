// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagexbm_nullbyte_injection.phpt
  it("Testing null byte injection in imagexbm", function () {
    expect(parser.parseCode("<?php\n$image = imagecreate(1,1);// 1px image\ntry {\n    imagexbm($image, \"./foo\\0bar\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
