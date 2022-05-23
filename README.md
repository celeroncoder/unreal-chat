# url-shortner-tut-appwrite

## Collection Permissions

To add the admin or root user add `role:member` to the collection, to not get the unauthorized error.

Note: Create an annomyous session first, before any requests.

```js
await api.account.createAnnoymousSession();
```
