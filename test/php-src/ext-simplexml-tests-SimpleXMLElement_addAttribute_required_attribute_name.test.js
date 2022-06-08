// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/SimpleXMLElement_addAttribute_required_attribute_name.phpt
  it("SimpleXMLElement: Test to ensure that the required attribute name correctly is giving a warning", function () {
    expect(parser.parseCode("<?php\n$a = new SimpleXMLElement(\"<php>testfest</php>\");\ntry {\n    $a->addAttribute( \"\", \"\" );\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho $a->asXML();\n?>")).toMatchSnapshot();
  });
});
