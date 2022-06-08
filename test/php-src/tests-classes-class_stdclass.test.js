// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/class_stdclass.phpt
  it("Instantiate stdClass", function () {
    expect(parser.parseCode("<?php\n$obj = new stdClass;\necho get_class($obj).\"\\n\";\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
