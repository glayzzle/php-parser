// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/inter_04.phpt
  it("Trying declare interface with repeated name of inherited method", function () {
    expect(parser.parseCode("<?php\ninterface a {\n    function b();\n}\ninterface b {\n    function b();\n}\ninterface c extends a, b {\n}\necho \"done!\\n\";\n?>")).toMatchSnapshot();
  });
});
