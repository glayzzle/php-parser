// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug75608.phpt
  it("Bug #75608 (\"Narrowing occurred during type inference\" error)", function () {
    expect(parser.parseCode("<?php\nclass ReactionRatingService\n{\n    public function calculateBoostPoints()\n    {\n        while ($reaction = $reactions) {\n            $reactionRatings = $this->validFunction();\n            $totalWeight  = 0;\n            $runningScore = 0;\n            $queue        = [];\n            foreach ($reactionRatings as $ratingData) {\n                if ($runningScore != $reaction['Score']) {\n                    if ( ! $ratingData['BoostEarned']) {\n                        $queue[] = $ratingData['UserID'];\n                    }\n                } else {\n                    foreach ($queue as $userId) {\n                        $userBoostPointsRecalculate[$userId][] = $reaction['ID'];\n                    }\n                }\n                $totalWeight += $ratingData['Weight'];\n            }\n        }\n    }\n}\n?>\nOK")).toMatchSnapshot();
  });
});
