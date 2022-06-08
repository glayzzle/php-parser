// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/error1.phpt
  it("oci_error() when oci_connect() fails", function () {
    expect(parser.parseCode("<?php\nvar_dump(oci_connect(\"some\", \"some\", \"some\"));\nvar_dump(oci_error());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
