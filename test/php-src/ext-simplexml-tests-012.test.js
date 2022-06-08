// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/012.phpt
  it("SimpleXML: Attribute creation", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\" ?>\n<foo/>\nEOF;\n$sxe = simplexml_load_string($xml);\ntry {\n    $sxe[\"\"] = \"value\";\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$sxe[\"attr\"] = \"value\";\necho $sxe->asXML();\n$sxe[\"attr\"] = \"new value\";\necho $sxe->asXML();\ntry {\n    $sxe[] = \"error\";\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n__HALT_COMPILER();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
