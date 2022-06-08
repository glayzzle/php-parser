// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interface_member.phpt
  it("ZE2 An interface cannot have properties", function () {
    expect(parser.parseCode("<?php\ninterface if_a {\n    public $member;\n}\n?>")).toMatchSnapshot();
  });
});
