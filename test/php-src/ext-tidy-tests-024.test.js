// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/024.phpt
  it("libtidy handling of 'new-blocklevel-tags'", function () {
    expect(parser.parseCode("<?php\n// more info at http://sf.net/tracker/?func=detail&atid=390963&aid=1598422&group_id=27659\n$contents = '\n<wps:block>\n<wps:var>\n<wps:value></wps:value>\n</wps:var>\n</wps:block>';\n$config = array(\n'doctype' => 'omit',\n'new-blocklevel-tags' => 'wps:block,wps:var,wps:value',\n'newline' => 'LF'\n);\n$tidy = tidy_parse_string($contents, $config, 'utf8');\n$tidy->cleanRepair();\necho $tidy;\n?>")).toMatchSnapshot();
  });
});
