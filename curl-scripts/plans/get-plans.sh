# TOKEN=BAhJIiU3MTFlYWU2MmU3MzBmNWM2ZGQyOGU2YzViMTkyYjExYgY6BkVG--daaca8418a73487d91f75a39ca9ac48abe98699c

curl --include 'http://localhost:4741/plans' \
  --header "Authorization: Token token=${TOKEN}"
