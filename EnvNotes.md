# .env

env file is used in projects to store configuration settings, environment variables, and sensitive information securely.

- The process of adding content inside the `.env` is different for every tech.
- Just read the documentation.
- `vite project : ` https://vitejs.dev/guide/env-and-mode.html
- `create-react-app project : ` https://create-react-app.dev/docs/adding-custom-environment-variables/
- Search and read for more.

## Vite Project

- Create a file named `.env` in the root of the project
- To prevent accidentally leaking env variables to the client, only variables prefixed with VITE\_ are exposed to your Vite-processed code. e.g. for the following env variables:

  ```js
  VITE_APPWRITE_URL = "https://cloud.appwrite.io/v1";
  VITE_APPWRITE_PROJECT_ID = "6633de4100349424bc88";
  VITE_APPWRITE_DATABASE_ID = "6633df9d0016e22bc891";
  VITE_APPWRITE_COLLECTION_ID = "6633dfbc003686da16c2";
  VITE_APPWRITE_BUCKET_ID = "6633e0d0002a519a1ad0";
  ```

- Then add the `.env` to `.gitignore`
- We can access these variables using `import.meta.env.VARIABLE_NAME`

## Notes :

- In production grade applications, we use `config` file to access the `env variables`
- Create `config` folder inside the `src`
- Create `config.js`
- Create an **object** and add **key-value** pairs to access the `env-variables`,then export the object.

```js
const config = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_BUCKET_ID),
};
export default config;
```