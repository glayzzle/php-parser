// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug51819.phpt
  it("Bug #51819 (Case discrepancy in timezone names cause Uncaught exception and fatal error)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\n$aTzAbbr = timezone_abbreviations_list();\n$aTz = array();\nforeach (array_keys($aTzAbbr) as $sKey) {\n    foreach (array_keys($aTzAbbr[$sKey]) as $iIndex) {\n        $sTz = $aTzAbbr[$sKey][$iIndex]['timezone_id'];\n        if (! in_array($sTz, $aTz)) {\n            array_push($aTz, $sTz);\n        }\n    }\n}\nforeach ($aTz as $sTz) {\n    $sDate = '2010-05-15 00:00:00 ' . $sTz;\n    try {\n        $oDateTime = new DateTime($sDate);\n    } catch (Exception $oException) {\n        var_dump($oException->getMessage());\n        print_r(DateTime::getLastErrors());\n    }\n}\nvar_dump('this should be the only output');\n?>")).toMatchSnapshot();
  });
});
