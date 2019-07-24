curl "http://localhost:4741/plans/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "plan": {
      "title": "'"${TEXT}"'",
      "description": "'"${TEXT}"'",
        "starting_date": "'"${STARTING_DATE}"'",
          "ending_date": "'"${ENDING_DATE}"'",
      "comments": "'"${COMMENTS}"'",
      "rating": "'"${RATING}"'",

    }
  }'

echo
