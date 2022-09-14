## Requirements

- Good practices
- Routes

```bash
# Return a specific user -> user (!id = all users)
GET /users/{id} ou /users?id=...

# Return a specific user post -> post (!id = all user posts)
GET /users/id/posts/{id}

# Create a user -> user
POST /users/create

# Create a post -> post
POST /users/id/posts/create

# Update a post -> post (if i can, a diff)
PUT /users/id/posts/id

# Delete a user -> user/void
DELETE /users/id

# Delete a post -> post/void
DELETE /users/id/posts/id
```
