// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_009.phpt
  it("Testing exception properties", function () {
    expect(parser.parseCode("<?php\nclass my_file\n{\n         public  function __toString()\n         {\n                 return \"somebuildfilename\" ;\n         }\n}\nclass my_exception extends exception\n{\n         public  function __construct()\n         {\n                 $this->message = new stdclass ;\n                 $this->file = new my_file ;\n                 $this->line = \"12\" ;\n         }\n}\nthrow new my_exception;\n?>")).toMatchSnapshot();
  });
});
