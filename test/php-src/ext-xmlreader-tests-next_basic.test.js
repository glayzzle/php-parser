// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/next_basic.phpt
  it("XMLReader: next basic", function () {
    expect(parser.parseCode("<?php\n$xml = '<?xml version=\"1.0\" encoding=\"UTF-8\"?><nodes><node1><sub /></node1>\n<node2><sub /></node2><node3><sub /></node3><node4><sub /></node4></nodes>';\n$reader = new XMLReader();\ntry {\n    $reader->read();\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    $reader->next();\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$reader->close();\n$reader->XML($xml);\n$reader->read();\n$reader->read();\necho $reader->name . PHP_EOL;\nvar_dump($reader->next('node3'));\necho $reader->name . PHP_EOL;\nvar_dump($reader->next());\necho $reader->name . PHP_EOL;\nvar_dump($reader->next('node5'));\necho $reader->name . PHP_EOL;\nvar_dump($reader->next());\necho $reader->name . PHP_EOL;\n$reader->close();\n?>")).toMatchSnapshot();
  });
});
