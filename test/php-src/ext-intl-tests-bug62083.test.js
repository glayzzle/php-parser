// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug62083.phpt
  it("Bug #62083: grapheme_extract() leaks memory", function () {
    expect(parser.parseCode("<?php\n$arr1 = array();\ntry {\n    grapheme_extract(-1, -1, -1,-1, $arr1);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
