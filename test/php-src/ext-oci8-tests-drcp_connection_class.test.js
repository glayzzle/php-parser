// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/drcp_connection_class.phpt
  it("DRCP: oci8.connection_class with ini_get() and ini_set()", function () {
    expect(parser.parseCode("<?php\necho \"Setting a new connection class now\\n\";\nini_set('oci8.connection_class',\"New cc\");\n// Get the New connection class name. Should return New CC\n$new_cc = ini_get('oci8.connection_class');\necho \"The New oci8.connection_class is $new_cc\\n\";\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
