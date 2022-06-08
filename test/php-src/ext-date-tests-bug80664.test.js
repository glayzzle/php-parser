// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug80664.phpt
  it("Bug #80664 (DateTime objects behave incorrectly around DST transition)", function () {
    expect(parser.parseCode("<?php\n$dt = new DateTime('@1604215800');\n$dt->setTimezone(new DateTimeZone('America/Boise'));\necho \"{$dt->format('Y-m-d H:i:s T')} | {$dt->getTimestamp()}\\n\";\n$dt->add(new DateInterval('PT1H'));\necho \"{$dt->format('Y-m-d H:i:s T')} | {$dt->getTimestamp()}\\n\";\n$dt->add(new DateInterval('PT1H'));\necho \"{$dt->format('Y-m-d H:i:s T')} | {$dt->getTimestamp()}\\n\";\n$dt->add(new DateInterval('PT1M'));\necho \"{$dt->format('Y-m-d H:i:s T')} | {$dt->getTimestamp()}\\n\\n\";\n$dt = new DateTime('@1604219400');\n$dt->setTimezone(new DateTimeZone('UTC'));\necho \"{$dt->format('Y-m-d H:i:s T')} | {$dt->getTimestamp()}\\r\\n\";\n$dt->setTimezone(new DateTimeZone('America/Boise'));\necho \"{$dt->format('Y-m-d H:i:s T')} | {$dt->getTimestamp()}\\r\\n\";\n?>")).toMatchSnapshot();
  });
});
