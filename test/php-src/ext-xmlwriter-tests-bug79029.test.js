// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/bug79029.phpt
  it("#79029 (Use After Free's in XMLReader / XMLWriter)", function () {
    expect(parser.parseCode("<?php\n$x = array( new XMLWriter() );\n$x[0]->openUri(\"bug79029_1.txt\");\n$x[0]->startComment();\n$y = new XMLWriter();\n$y->openUri(\"bug79029_2.txt\");\nfclose(@end(get_resources()));\nfile_put_contents(\"bug79029_3.txt\", \"a\");\n$z = new XMLReader();\n$z->open(\"bug79029_3.txt\");\nfclose(@end(get_resources()));\n?>\nokey")).toMatchSnapshot();
  });
});
