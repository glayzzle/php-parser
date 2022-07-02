// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug71882.phpt
  it("Bug #71882 (Negative ftruncate() on php://memory exhausts memory)", function () {
    expect(parser.parseCode("<?php\n$fd = fopen(\"php://memory\", \"w+\");\ntry {\n    var_dump(ftruncate($fd, -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
