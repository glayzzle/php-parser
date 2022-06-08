// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug70245.phpt
  it("Bug #70245 (strtotime does not emit warning when 2nd parameter is object or string)", function () {
    expect(parser.parseCode("<?php\n$d = new DateTime('2011-01-15 00:00:00');\ntry {\n    var_dump(strtotime('-1 month', $d));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
