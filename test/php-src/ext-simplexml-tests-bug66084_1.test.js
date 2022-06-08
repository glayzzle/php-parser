// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug66084_1.phpt
  it("Bug #66084 simplexml_load_string() mangles empty node name, json variant", function () {
    expect(parser.parseCode("<?php\necho json_encode(simplexml_load_string('<a><b/><c><x/></c></a>')->c), \"\\n\";\necho json_encode(simplexml_load_string('<a><b/><c><x/></c></a>')), \"\\n\";\necho json_encode(simplexml_load_string('<a><b/><d/><c><x/></c></a>')), \"\\n\";\necho json_encode(simplexml_load_string('<a><b/><c><d/><x/></c></a>')), \"\\n\";\necho json_encode(simplexml_load_string('<a><b/><c><d><x/></d></c></a>')), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
