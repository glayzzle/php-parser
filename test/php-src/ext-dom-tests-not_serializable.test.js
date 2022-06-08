// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/not_serializable.phpt
  it("DOM classes are not serializable", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\n$doc->loadXML('<root><node/></root>');\ntry {\n    serialize($doc);\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$node = $doc->documentElement;\ntry {\n    serialize($node);\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$xpath = new DOMXPath($doc);\ntry {\n    serialize($xpath);\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$ns = $xpath->query('//namespace::*')->item(0);\ntry {\n    serialize($ns);\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
