// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DatePeriod_IteratorAggregate.phpt
  it("DatePeriod can be used as an IteratorAggregate", function () {
    expect(parser.parseCode("<?php\n$period = new DatePeriod('R2/2012-07-01T00:00:00Z/P7D');\nforeach ($period as $i => $date) {\n    echo \"$i: \", $date->format('Y-m-d'), \"\\n\";\n}\necho \"\\n\";\nforeach ($period->getIterator() as $i => $date) {\n    echo \"$i: \", $date->format('Y-m-d'), \"\\n\";\n}\necho \"\\n\";\n$iter = $period->getIterator();\nfor (; $iter->valid(); $iter->next()) {\n    $i = $iter->key();\n    $date = $iter->current();\n    echo \"$i: \", $date->format('Y-m-d'), \"\\n\";\n}\necho \"\\n\";\n$iter->rewind();\nfor (; $iter->valid(); $iter->next()) {\n    $i = $iter->key();\n    $date = $iter->current();\n    echo \"$i: \", $date->format('Y-m-d'), \"\\n\";\n}\necho \"\\n\";\nforeach (new IteratorIterator($period) as $i => $date) {\n    echo \"$i: \", $date->format('Y-m-d'), \"\\n\";\n}\n// Extension that does not overwrite getIterator().\nclass MyDatePeriod1 extends DatePeriod {\n}\necho \"\\n\";\n$period = new MyDatePeriod1('R2/2012-07-01T00:00:00Z/P7D');\nforeach ($period as $i => $date) {\n    echo \"$i: \", $date->format('Y-m-d'), \"\\n\";\n}\n// Extension that does overwrite getIterator().\nclass MyDatePeriod2 extends DatePeriod {\n    public function getIterator(): Iterator {\n        return new ArrayIterator([1, 2, 3]);\n    }\n}\necho \"\\n\";\n$period = new MyDatePeriod2('R2/2012-07-01T00:00:00Z/P7D');\nforeach ($period as $i => $notDate) {\n    echo \"$i: $notDate\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
