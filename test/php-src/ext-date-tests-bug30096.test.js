// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug30096.phpt
  it("Bug #30096 (gmmktime does not return the correct time)", function () {
    expect(parser.parseCode("<?php\necho \"no dst --> dst\\n\";\n$ts = -1;\ngm_date_check(01,00,00,03,27,2005);\ngm_date_check(02,00,00,03,27,2005);\ngm_date_check(03,00,00,03,27,2005);\ngm_date_check(04,00,00,03,27,2005);\necho \"\\ndst --> no dst\\n\";\n$ts = -1;\ngm_date_check(01,00,00,10,30,2005);\ngm_date_check(02,00,00,10,30,2005);\ngm_date_check(03,00,00,10,30,2005);\ngm_date_check(04,00,00,10,30,2005);\nfunction gm_date_check($hour, $minute, $second, $month, $day, $year) {\n    global $ts, $tsold;\n    echo \"gmmktime($hour,$minute,$second,$month,$day,$year): \";\n    $tsold = $ts;\n    $ts = gmmktime($hour, $minute, $second, $month, $day, $year);\n    echo $ts, \" | gmdate('r', $ts):\", gmdate('r', $ts);\n    if ($tsold > 0) {\n        echo \" | Diff: \" . ($ts - $tsold);\n    }\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
