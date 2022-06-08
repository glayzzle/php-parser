// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/007.phpt
  it("XMLReader: libxml2 XML Reader, setRelaxNGSchema", function () {
    expect(parser.parseCode("<?php\n$xmlstring = '<TEI.2>hello</TEI.2>';\n$relaxngfile = __DIR__ . '/relaxNG.rng';\n$file = __DIR__ . '/_007.xml';\nfile_put_contents($file, $xmlstring);\n$reader = new XMLReader();\n$reader->open($file);\nif ($reader->setRelaxNGSchema($relaxngfile)) {\n  while ($reader->read());\n}\nif ($reader->isValid()) {\n  print \"file relaxNG: ok\\n\";\n} else {\n  print \"file relaxNG: failed\\n\";\n}\n$reader->close();\nunlink($file);\n$reader = new XMLReader();\n$reader->XML($xmlstring);\nif ($reader->setRelaxNGSchema($relaxngfile)) {\n  while ($reader->read());\n}\nif ($reader->isValid()) {\n  print \"string relaxNG: ok\\n\";\n} else {\n  print \"string relaxNG: failed\\n\";\n}\n$reader->close();\n$reader = new XMLReader();\n$reader->XML($xmlstring);\ntry {\n    $reader->setRelaxNGSchema('');\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$reader->close();\n?>")).toMatchSnapshot();
  });
});
