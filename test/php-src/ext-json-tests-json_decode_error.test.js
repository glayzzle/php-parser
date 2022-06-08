// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/json_decode_error.phpt
  it("Test json_decode() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing json_decode() : error conditions ***\\n\";\necho \"\\n-- Testing json_decode() function with depth below 0 --\\n\";\ntry {\n    var_dump(json_decode('\"abc\"', true, -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
