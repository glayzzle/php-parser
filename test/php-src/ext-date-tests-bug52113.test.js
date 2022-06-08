// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug52113.phpt
  it("Bug #52113 (Seg fault while creating (by unserialization) DatePeriod)", function () {
    expect(parser.parseCode("<?php\n$start = new DateTime('2003-01-02 08:00:00');\n$end = new DateTime('2003-01-02 12:00:00');\n$diff = $start->diff($end);\n$p = new DatePeriod($start, $diff, 2);\n$diff_s = serialize($diff);\nvar_dump($diff, $diff_s);\nvar_export($diff);\n$diff_un = unserialize($diff_s);\n$p = new DatePeriod($start, $diff_un, 2);\nvar_dump($diff_un, $p);\n$unser = DateInterval::__set_state(array(\n   'y' => 7,\n   'm' => 6,\n   'd' => 5,\n   'h' => 4,\n   'i' => 3,\n   's' => 2,\n   'f' => 0.876543,\n   'invert' => 1,\n   'days' => 2400,\n));\n$p = new DatePeriod($start, $diff_un, 2);\nvar_dump($unser, $p);\n?>")).toMatchSnapshot();
  });
});
