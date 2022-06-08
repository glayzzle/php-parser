// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeZone_getTransitions_bug1.phpt
  it("GH-7752: DateTimeZone::getTransitions() does not return enough information", function () {
    expect(parser.parseCode("<?php\nfunction showTransitions(string $tzid, int $from)\n{\n\t$to = $from + ((2.5 * 366) * 24 * 60 * 60);\n\techo \"{$tzid} from @{$from}-@{$to}:\\n\\n\";\n\t$tz = new DateTimeZone($tzid);\n\tforeach ($tz->getTransitions($from, $to) as $t) {\n\t\tprintf(\"%12d %s %6d %s %s\\n\", $t['ts'], $t['time'], $t['offset'], $t['isdst'] ? \"DST\" : \" x \", $t['abbr']);\n\t}\n\techo \"\\n\";\n}\nshowTransitions('Europe/London', 1648342200);\nshowTransitions('America/Los_Angeles', 1648557596); // GH Issue 7752\nshowTransitions('America/Chicago', 1293861600);     // PHP Bug 81660\nshowTransitions('Europe/Paris', 1645095600);        // GH Issue 8108\n?>")).toMatchSnapshot();
  });
});
