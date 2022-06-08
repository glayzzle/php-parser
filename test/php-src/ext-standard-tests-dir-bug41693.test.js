// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/bug41693.phpt
  it("Bug #41693 (scandir() allows empty directory names)", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(scandir(''));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
