// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/xml_parser_set_option_variation5.phpt
  it("xml_parser_set_option() - Test invalid parameter", function () {
    expect(parser.parseCode("<?php\n$xmlParser = xml_parser_create();\ntry {\n    xml_parser_set_option($xmlParser, 42, 1);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
