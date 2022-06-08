// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_025.phpt
  it("SCCP 025: ADD_ARRAY_ELEMENT against an existing const array", function () {
    expect(parser.parseCode("<?php\nfunction test($phpEx)\n{\n    $expected_data_sets = array(\n        1 => array(\n            'id'  => 1,\n        ),\n        6 => array(\n            'viewtopic' => strval(\"phpBB/viewtopic.$phpEx\"),\n        ),\n    );\n    $test_cases = array(\n        array(\n            'expected' => array(6),\n        ),\n    );\n    foreach ($test_cases as $case => $case_data)\n    {\n        foreach ($case_data['expected'] as $data_set => $expected)\n        {\n            $test_cases[$case]['expected'][$data_set] = $expected_data_sets[$expected];\n        }\n    }\n    return $test_cases;\n}\nvar_dump(test(\"xxx\"));\n?>")).toMatchSnapshot();
  });
});
