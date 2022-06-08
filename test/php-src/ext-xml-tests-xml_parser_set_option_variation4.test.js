// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/xml_parser_set_option_variation4.phpt
  it("xml_parser_free - Test setting skip whitespace and invalid encoding type", function () {
    expect(parser.parseCode("<?php\n$xmlParser = xml_parser_create();\nvar_dump(xml_parser_set_option($xmlParser, XML_OPTION_SKIP_WHITE, 1));\ntry {\n    xml_parser_set_option($xmlParser, XML_OPTION_TARGET_ENCODING, 'Invalid Encoding');\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
