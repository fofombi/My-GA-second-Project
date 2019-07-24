# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh


# BAhJIiU2ODgyYmZiMzI0OGVjNGQyZDY0NzI1NTQxODE0NzUyZgY6BkVG--4b587249db80de9732b7b8f0e0fe626bb2b5308b

curl "http://localhost:4741/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
