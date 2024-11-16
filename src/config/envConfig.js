const envConfig = {
  projectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  projectURL: String(import.meta.env.VITE_APPWRITE_PROJECT_URL),
  dbID: String(import.meta.env.VITE_APPWRITE_DB_ID),
  collectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  bucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default envConfig;
