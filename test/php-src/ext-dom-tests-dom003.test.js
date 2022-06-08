// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/dom003.phpt
  it("Test 3: Exception Test", function () {
    expect(parser.parseCode("<?php\n$dom = new domdocument;\n$dom->load(__DIR__.\"/book.xml\");\n$rootNode = $dom->documentElement;\nprint \"--- Catch exception with try/catch\\n\";\ntry {\n    $rootNode->appendChild($rootNode);\n} catch (domexception $e) {\n    ob_start();\n    var_dump($e);\n    $contents = ob_get_contents();\n    ob_end_clean();\n    echo preg_replace('/object\\(DOMElement\\).+\\{.*?\\}/s', 'DOMElement', $contents);\n}\nprint \"--- Don't catch exception with try/catch\\n\";\n$rootNode->appendChild($rootNode);\n?>")).toMatchSnapshot();
  });
});
