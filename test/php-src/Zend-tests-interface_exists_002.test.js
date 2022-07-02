// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/interface_exists_002.phpt
  it("Testing interface_exists() inside a namespace", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\ninterface IFoo { }\ninterface ITest extends IFoo { }\ninterface IBar extends IFoo { }\nvar_dump(interface_exists('IFoo'));\nvar_dump(interface_exists('foo\\\\IFoo'));\nvar_dump(interface_exists('FOO\\\\ITEST'));\n?>")).toMatchSnapshot();
  });
});
