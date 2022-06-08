// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DatePeriod_no_advance_on_valid.phpt
  it("Date Period iterators do not advance on valid()", function () {
    expect(parser.parseCode("<?php\n$start = DateTime::createFromFormat('Y-m-d', '2022-01-01');\n$end = DateTime::createFromFormat('Y-m-d', '2022-01-04');\n$interval = DateInterval::createFromDateString('1 day');\n$period = new DatePeriod($start, $interval, $end);\n$iterator = $period->getIterator();\nforeach ($iterator as $item) {\n    echo $item->format('Y-m-d') . \"\\n\";\n}\necho \"---------STEP 2\\n\";\nforeach ($iterator as $item) {\n    $iterator->valid();\n    echo $item->format('Y-m-d') . \"\\n\";\n}\n$period = new DatePeriod($start, $interval, $end, DatePeriod::EXCLUDE_START_DATE);\n$iterator = $period->getIterator();\necho \"---------STEP 3\\n\";\nforeach ($iterator as $item) {\n    echo $item->format('Y-m-d') . \"\\n\";\n}\necho \"---------STEP 4\\n\";\nforeach ($iterator as $item) {\n    $iterator->valid();\n    echo $item->format('Y-m-d') . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
