// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/ctor_in_interface_02.phpt
  it("ZE2 A class constructor must keep the signature of all interfaces", function () {
    expect(parser.parseCode("<?php\ninterface constr1\n{\n    function __construct();\n}\ninterface constr2 extends constr1\n{\n}\nclass implem12 implements constr2\n{\n    function __construct()\n    {\n    }\n}\ninterface constr3\n{\n    function __construct($a);\n}\nclass implem13 implements constr1, constr3\n{\n    function __construct()\n    {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
