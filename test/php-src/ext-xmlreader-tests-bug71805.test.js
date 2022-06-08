// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/bug71805.phpt
  it("XMLReader: Bug #71805 XML files can generate UTF-8 error even if they are UTF-8", function () {
    expect(parser.parseCode("<?php\nTestXML(__DIR__ . DIRECTORY_SEPARATOR . 'XMLReaderGood_bug71805.xml');\nTestXML(__DIR__ . DIRECTORY_SEPARATOR . 'XMLReaderBad_bug71805.xml');\nfunction TestXML($file) {\n    $XR = new XMLReader;\n    $XR->open($file, null, LIBXML_NOBLANKS);\n    while (($lastRead = $XR->read()) && ($XR->name !== 'records'));\n    while (($lastRead = $XR->read()) && ($XR->name !== 'record'));\n    while ($lastRead) {\n        $xml = $XR->readOuterXML();\n        if ($xml === '') {\n            $err = '';\n            if ($e = libxml_get_last_error()) { $err = $e->message.' (line: '.$e->line.')'; }\n            $XR->close();\n            echo $file.' : Problem with file'.($err ? ' — '.$err : '').'.';\n            echo \"\\n\";\n            return;\n        }\n        while (($lastRead = $XR->next()) && ($XR->name !== 'record'));\n    }\n    $XR->close();\n    echo $file.' : Good!';\n    echo \"\\n\";\n    return;\n}\n?>")).toMatchSnapshot();
  });
});
