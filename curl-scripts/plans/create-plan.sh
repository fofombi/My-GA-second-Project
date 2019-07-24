'use strict'
curl "http://localhost:4741/plans" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "plan": {
      "title": "'"${TEXT}"'",
      "description": "'"${TEXT}"'",
        "starting_date": "'"${STARTING_DATE}"'",
          "ending_date": "'"${ENDING_DATE}"'",
      "comments": "'"${COMMENTS}"'",
      "rating": "'"${RATING}"'",

  }'

echo
