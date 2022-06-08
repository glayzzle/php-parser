// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug77945.phpt
  it("Bug #77945: Segmentation fault when constructing SoapClient with WSDL_CACHE_BOTH", function () {
    expect(parser.parseCode("<?php\n// The important part is to have a restriction enumeration with value=\"\".\n$client = new SoapClient(__DIR__ . '/bug29236.wsdl', [\n    'cache_wsdl' => WSDL_CACHE_BOTH\n]);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
