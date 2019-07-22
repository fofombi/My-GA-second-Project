# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh

#Token token=BAhJIiViMWNkZTdiZjk2MzlhNzFmYTgzY2MwYmIzMDViYjljNgY6BkVG--9d22fd38e39dd02f0906d5fc87eeadc558db726d

curl "https://wdi-library-api.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
  "passwords":{
    "old": "'"${OLD}"'",
    "new": "'"${NEW}"'"
  }
}'

echo
