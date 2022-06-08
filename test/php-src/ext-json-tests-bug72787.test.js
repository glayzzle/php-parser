// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug72787.phpt
  it("Bug #72787 (json_decode reads out of bounds)", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(json_decode('[]', false, 0x100000000));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
