// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/get_declared_traits_001.phpt
  it("Testing get_declared_traits()", function () {
    expect(parser.parseCode("<?php\nclass a { }\ninterface b { }\ntrait c { }\nabstract class d { }\nfinal class e { }\nvar_dump(get_declared_traits());\n?>")).toMatchSnapshot();
  });
});
