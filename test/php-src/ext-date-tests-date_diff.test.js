// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_diff.phpt
  it("Extensive test for date_diff().", function () {
    expect(parser.parseCode("<?php\n$ok = 0;\ndefine( 'COUNT', 120 );\n$d0 = new DateTime('2009-11-20');\nfor ( $i = 0; $i < COUNT * 12; $i++ )\n{\n    $d = clone $d0;\n    $dates[$i] = $d->add( new DateInterval( \"P{$i}D\" ) );\n}\nfor ( $i = 0; $i < COUNT; $i++)\n{\n//\techo $dates[$i]->format( \"Y-m-d\\n\" );\n    for ( $j = 0; $j < COUNT * 12; $j++)\n    {\n        $diff = date_diff( $dates[$i], $dates[$j] );\n        /*\n        printf( \"\\t%s %s %3d %s\\n\",\n            $dates[$i]->format( 'Y-m-d' ),\n            $dates[$j]->format( 'Y-m-d' ),\n            $diff->format( '%a' ),\n            $diff->format( '%y-%m-%d' )\n        );\n        */\n        $current = clone $dates[$i];\n        $int = new DateInterval( $diff->format( 'P%yY%mM%dD' ) );\n        if ( $current > $dates[$j] )\n        {\n            $current->sub( $int );\n        }\n        else\n        {\n            $current->add( $int );\n        }\n        if ( $current != $dates[$j] )\n        {\n            echo \"FAIL: \",\n                $dates[$i]->format( 'Y-m-d' ), \" + \",\n                $int->format( '%y-%m-%d' ), \" = \",\n                $current->format( 'Y-m-d' ), \" (\",\n                $dates[$j]->format( 'Y-m-d' ), \")\\n\";\n        }\n        else\n        {\n            $ok++;\n        }\n    }\n}\necho $ok, \"\\n\";\n?>")).toMatchSnapshot();
  });
});
