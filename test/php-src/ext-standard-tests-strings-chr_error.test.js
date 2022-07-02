// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chr_error.phpt
  it("Test chr() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing chr() : error conditions ***\\n\";\necho \"\\n-- Testing chr() function with no arguments --\\n\";\ntry {\n    var_dump( chr() );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\n-- Testing chr() function with more than expected no. of arguments --\\n\";\n$extra_arg = 10;\ntry {\n    var_dump( chr(72, $extra_arg) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
