// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sscanf_error.phpt
  it("Test sscanf() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sscanf() : error conditions ***\\n\";\n$str = \"Hello World\";\n$format = \"%s %s\";\necho \"\\n-- Testing sscanf() function with more than expected no. of arguments --\\n\";\ntry {\n    sscanf($str, $format, $str1, $str2, $extra_str);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
