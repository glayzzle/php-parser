// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/fault001.phpt
  it("is_soap_fault 1: test against null", function () {
    expect(parser.parseCode("<?php\nvar_dump(is_soap_fault(null));\n$fault = new SoapFault(\"code\", \"message\");\nvar_dump(is_soap_fault($fault));\n?>")).toMatchSnapshot();
  });
});
