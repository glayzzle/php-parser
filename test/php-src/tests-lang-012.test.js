// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/012.phpt
  it("Testing stack after early function return", function () {
    expect(parser.parseCode("<?php\nfunction F () {\n    if(1) {\n        return(\"Hello\");\n    }\n}\n$i=0;\nwhile ($i<2) {\n    echo F();\n    $i++;\n}\n?>")).toMatchSnapshot();
  });
});
