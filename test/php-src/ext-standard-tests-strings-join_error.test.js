// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/join_error.phpt
  it("Test join() function: error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing join() : error conditions ***\\n\";\n// Less than expected number of arguments\necho \"\\n-- Testing join() with less than expected no. of arguments --\\n\";\n$glue = 'string_val';\ntry {\n    var_dump(join($glue));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
