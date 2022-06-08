// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug37076_1.phpt
  it("Bug #37076 (SimpleXML ignores .=) (appending to unnamed attribute)", function () {
    expect(parser.parseCode("<?php\n$xml = simplexml_load_string(\"<root><foo /></root>\");\ntry {\n    $xml->{\"\"} .= \"bar\";\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nprint $xml->asXML();\n?>")).toMatchSnapshot();
  });
});
