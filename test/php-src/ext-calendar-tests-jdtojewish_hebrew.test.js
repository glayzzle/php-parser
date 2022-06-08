// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/jdtojewish_hebrew.phpt
  it("Test all hebrew month names", function () {
    expect(parser.parseCode("<?php\nfor ($year = 5000; $year <= 5001; $year++) {\n    $leap = ($year === 5001) ? 'leap' : 'normal';\n    echo \"$leap year $year\\n\";\n    for ($month = 1; $month <= 13; $month++) {\n        $jd = jewishtojd($month, 1, $year);\n        $hebrew = jdtojewish($jd, true);\n        $hex = bin2hex($hebrew);\n        echo \"$hex\\n\";\n    }\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
