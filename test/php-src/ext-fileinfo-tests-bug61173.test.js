// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug61173.phpt
  it("Bug #61173: Unable to detect error from finfo constructor", function () {
    expect(parser.parseCode("<?php\ntry {\n    $finfo = new finfo(1, '', false);\n    var_dump($finfo);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
