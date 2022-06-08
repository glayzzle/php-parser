// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug40743.phpt
  it("Bug #40743 (DateTime ignores the TimeZone object passed to the constructor)", function () {
    expect(parser.parseCode("<?php\n$dt = new DateTime('@1200506699', new DateTimeZone('Europe/Berlin'));\necho $dt->format(DATE_RFC822), \"\\n\";\necho $dt->format('T e Z'), \"\\n\";\necho \"-----\\n\";\ndate_default_timezone_set('America/New_York');\n$dt = new DateTime('16 Jan 08 13:04:59');\necho $dt->format(DATE_RFC822 . \" e T O U\"), \"\\n\";\n$dt = new DateTime('@1200506699');\necho $dt->format(DATE_RFC822 . \" e T O U\"), \"\\n\";\n$dt = new DateTime('@1200506699');\n$dt->setTimezone( new DateTimeZone( 'America/New_York' ) );\necho $dt->format(DATE_RFC822 . \" e T O U\"), \"\\n\";\n$dt = new DateTime('@1200506699', new DateTimeZone('Europe/Berlin'));\necho $dt->format(DATE_RFC822 . \" e T O U\"), \"\\n\";\n$dt = new DateTime('16 Jan 08 13:04:59 America/Chicago');\necho $dt->format(DATE_RFC822 . \" e T O U\"), \"\\n\";\n$dt = new DateTime('16 Jan 08 13:04:59 America/Chicago', new DateTimeZone('Europe/Berlin'));\necho $dt->format(DATE_RFC822 . \" e T O U\"), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
