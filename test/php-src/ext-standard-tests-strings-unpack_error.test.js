// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/unpack_error.phpt
  it("Test unpack() function : error conditions", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(unpack(\"B\", pack(\"I\", 65534)));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
