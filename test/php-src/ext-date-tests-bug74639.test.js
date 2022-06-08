// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug74639.phpt
  it("Bug #74639 Cloning DatePeriod leads to segfault", function () {
    expect(parser.parseCode("<?php\n$start = new DateTime('2017-05-22 09:00:00');\n$end = new DateTime('2017-08-24 18:00:00');\n$interval = $start->diff($end);\n$period = new DatePeriod($start, $interval, $end);\n$clonedPeriod = clone $period;\n$clonedInterval = clone $interval;\nif ($period->getStartDate() != $clonedPeriod->getStartDate()) {\n    echo \"failure\\n\";\n}\nif ($period->getEndDate() != $clonedPeriod->getEndDate()) {\n    echo \"failure\\n\";\n}\nif ($interval->format('Y-m-d H:i:s') != $clonedInterval->format('Y-m-d H:i:s')) {\n    echo \"failure\\n\";\n}\necho 'success';\n?>")).toMatchSnapshot();
  });
});
