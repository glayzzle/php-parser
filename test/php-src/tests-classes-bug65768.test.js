// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/bug65768.phpt
  it("Bug #65768: date_diff accepts only DateTime instance even though docs say about DateTimeInterface", function () {
    expect(parser.parseCode("<?php\n$dt1 = new DateTime(\"2010-10-20\");\n$dti1 = new DateTimeImmutable(\"2010-10-25\");\n$dti2 = new DateTimeImmutable(\"2010-10-28\");\n$diff1 = $dt1->diff($dti1);\necho $diff1->y, \" \", $diff1->m, \" \", $diff1->d, \" \",\n     $diff1->h, \" \", $diff1->i, \" \", $diff1->s, \"\\n\";\n$diff2 = $dti1->diff($dti2);\necho $diff2->y, \" \", $diff2->m, \" \", $diff2->d, \" \",\n     $diff2->h, \" \", $diff2->i, \" \", $diff2->s, \"\\n\";\n$diff3 = date_diff($dt1, $dti2);\necho $diff3->y, \" \", $diff3->m, \" \", $diff3->d, \" \",\n     $diff3->h, \" \", $diff3->i, \" \", $diff3->s, \"\\n\";\nclass cdt1 extends DateTime implements DateTimeInterface {}\nclass cdt2 extends DateTimeImmutable implements DateTimeInterface {}\nclass cdt3 implements DateTimeInterface {}\n?>")).toMatchSnapshot();
  });
});
