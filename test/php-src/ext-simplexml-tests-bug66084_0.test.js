// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug66084_0.phpt
  it("Bug #66084 simplexml_load_string() mangles empty node name, var_dump variant", function () {
    expect(parser.parseCode("<?php\necho var_dump(simplexml_load_string('<a><b/><c><x/></c></a>')), \"\\n\";\necho var_dump(simplexml_load_string('<a><b/><d/><c><x/></c></a>')), \"\\n\";\necho var_dump(simplexml_load_string('<a><b/><c><d/><x/></c></a>')), \"\\n\";\necho var_dump(simplexml_load_string('<a><b/><c><d><x/></d></c></a>')), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
