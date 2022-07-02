// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/ctor_in_interface_04.phpt
  it("ZE2 A class constructor must keep the signature of base class interfaces", function () {
    expect(parser.parseCode("<?php\ninterface constr\n{\n    function __construct();\n}\nclass implem implements constr\n{\n    function __construct()\n    {\n    }\n}\nclass derived extends implem\n{\n    function __construct($a)\n    {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
