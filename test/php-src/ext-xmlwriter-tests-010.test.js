// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/010.phpt
  it("xmlwriter_start/end_attribute()", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__.'/010.tmp';\n$xw = xmlwriter_open_uri($file);\nvar_dump(xmlwriter_start_element($xw, \"tag\"));\nvar_dump(xmlwriter_start_attribute($xw, \"attr\"));\nvar_dump(xmlwriter_end_attribute($xw));\ntry {\n    xmlwriter_start_attribute($xw, \"-1\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(xmlwriter_end_attribute($xw));\ntry {\n    xmlwriter_start_attribute($xw, \"\\\"\");\n} catch (ValueError $e) {\n     echo $e->getMessage(), \"\\n\";\n}\nvar_dump(xmlwriter_end_attribute($xw));\nvar_dump(xmlwriter_end_element($xw));\n// Force to write and empty the buffer\nxmlwriter_flush($xw, empty: true);\nunset($xw);\nvar_dump(file_get_contents($file));\n@unlink($file);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
