// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_constructor.phpt
  it("Attempt to instantiate an LDAP\\Connection directly", function () {
    expect(parser.parseCode("<?php\ntry {\n    new LDAP\\Connection();\n} catch (Error $ex) {\n    echo \"Exception: \", $ex->getMessage(), \"\\n\";\n}")).toMatchSnapshot();
  });
});
