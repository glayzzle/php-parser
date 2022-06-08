// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DatePeriod_getter.phpt
  it("DatePeriod: Test getter", function () {
    expect(parser.parseCode("<?php\n$start = new DateTime('2000-01-01 00:00:00', new DateTimeZone('Europe/Berlin'));\n$end   = new DateTime('2000-01-31 00:00:00', new DateTimeZone('UTC'));\n$interval = new DateInterval('P1D');\n$period   = new DatePeriod($start, $interval, $end);\n$recurrences = 4;\nvar_dump($period->getStartDate()->format('Y-m-d H:i:s'));\nvar_dump($period->getStartDate()->getTimeZone()->getName());\nvar_dump($period->getEndDate()->format('Y-m-d H:i:s'));\nvar_dump($period->getEndDate()->getTimeZone()->getName());\nvar_dump($period->getDateInterval()->format('%R%y-%m-%d-%h-%i-%s'));\nvar_dump($period->getRecurrences());\n$periodWithRecurrences = new DatePeriod($start, $interval, $recurrences);\nvar_dump($periodWithRecurrences->getRecurrences());\nvar_dump($periodWithRecurrences->getEndDate());\n$periodWithRecurrencesWithoutStart = new DatePeriod($start, $interval, $recurrences, DatePeriod::EXCLUDE_START_DATE);\nvar_dump($periodWithRecurrences->getRecurrences());\n?>")).toMatchSnapshot();
  });
});
