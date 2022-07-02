// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/wordwrap_error.phpt
  it("Test wordwrap() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing wordwrap() : error conditions ***\\n\";\n$str = 'testing wordwrap function';\n$width = 10;\n$break = '<br />\\n';\n$cut = true;\n// $width arg as negative value\necho \"\\n-- Testing wordwrap() function with negative/zero value for width argument --\\n\";\necho \"-- width = 0 & cut = false --\\n\";\n// width as zero and cut as false\n$width = 0;\n$cut = false;\nvar_dump( wordwrap($str, $width, $break, $cut) );\necho \"-- width = 0 & cut = true --\\n\";\n// width as zero and cut as true\n$width = 0;\n$cut = true;\ntry {\n    wordwrap($str, $width, $break, $cut);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho \"-- width = -10 & cut = false --\\n\";\n// width as -ne and cut as false\n$width = -10;\n$cut = false;\nvar_dump( wordwrap($str, $width, $break, $cut) );\necho \"-- width = -10 & cut = true --\\n\";\n// width as -ne and cut as true\n$width = -10;\n$cut = true;\nvar_dump( wordwrap($str, $width, $break, $cut) );\n?>")).toMatchSnapshot();
  });
});
