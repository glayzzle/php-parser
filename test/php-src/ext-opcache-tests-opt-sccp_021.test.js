// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_021.phpt
  it("SCCP 021: Memleak", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function memleak($num_tokens) {\n        $queries = array();\n        for ( $i = 0; $i < $num_tokens; ++$i ) {\n            if ( 0 < $i )\n                $queries[$i] = $queries[$i - 1] . '&';\n            else\n                $queries[$i] = '';\n            $queries[$i] .= $query_token;\n        }\n        return;\n    }\n}\n?>\nokey")).toMatchSnapshot();
  });
});
