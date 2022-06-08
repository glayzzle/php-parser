// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/clientversion.phpt
  it("oci_client_version()", function () {
    expect(parser.parseCode("<?php\necho oci_client_version(), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
