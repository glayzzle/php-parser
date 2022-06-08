// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/current_error.phpt
  it("SimpleXML: invoking current() after the iterator has already been consumed", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<?xml version='1.0'?>\n<root>\n<elem/>\n</root>\nEOF;\n$sxe = simplexml_load_string($xml);\ntry {\n    $sxe->current();\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nfor ($sxe->rewind(); $sxe->valid(); $sxe->next()) {\n    var_dump($sxe->key(), $sxe->current());\n}\ntry {\n    $sxe->current();\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
