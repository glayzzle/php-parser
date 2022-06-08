// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug77569.phpt
  it("Bug #77569 (Write Access Violation in DomImplementation)", function () {
    expect(parser.parseCode("<?php\n$imp = new DOMImplementation;\n$dom = $imp->createDocument(\"\", \"\");\ntry {\n    $dom->encoding = null;\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
