// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/027.phpt
  it("Testing do-while loop", function () {
    expect(parser.parseCode("<?php\n$i=3;\ndo {\n    echo $i;\n    $i--;\n} while($i>0);\n?>")).toMatchSnapshot();
  });
});
