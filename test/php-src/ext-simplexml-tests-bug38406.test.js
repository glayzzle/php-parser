// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug38406.phpt
  it("Bug #38406 (crash when assigning objects to SimpleXML attributes)", function () {
    expect(parser.parseCode("<?php\n$item = new SimpleXMLElement('<something />');\n$item->attribute = 'something';\nvar_dump($item->attribute);\n$item->otherAttribute = $item->attribute;\nvar_dump($item->otherAttribute);\n$a = array();\ntry {\n    $item->$a = new stdclass;\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
