// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/xml_parser_get_option_variation4.phpt
  it("xml_parser_get_option() - Test parameter not set", function () {
    expect(parser.parseCode("<?php\n$xmlParser = xml_parser_create();\ntry {\n    xml_parser_get_option ($xmlParser, 42);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
