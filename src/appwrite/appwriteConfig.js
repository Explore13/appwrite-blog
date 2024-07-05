import config from "../config/config.js";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl) // Corrected from config.appwriteProjectId to config.appwriteUrl
      .setProject(config.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // Create a post
  async createPost({ title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        ID.unique(), // documentId
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log(`Appwrite Service :: createPost :: error `, error);
    }
  }

  // Update a post
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        slug, // documentId
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log(`Appwrite Service :: updatePost :: error `, error);
    }
  }

  // Delete a post
  async deletePost(postId) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        postId // documentId
      );
      return true;
    } catch (error) {
      console.log(`Appwrite Service :: deletePost :: error `, error);
      return false;
    }
  }

  // Get a post
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        slug // documentId
      );
    } catch (error) {
      console.log(`Appwrite Service :: getPost :: error `, error);
      return false;
    }
  }

  // Get all posts
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        queries // queries
      );
    } catch (error) {
      console.log(`Appwrite Service :: getPosts :: error `, error);
      return false;
    }
  }

  // File upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId, // bucketId
        ID.unique(), // fileId
        file // file from input
      );
    } catch (error) {
      console.log(`Appwrite Service :: uploadFile :: error `, error);
      return false;
    }
  }

  // Delete a file
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        config.appwriteBucketId, // bucketId
        fileId // fileId
      );
      return true;
    } catch (error) {
      console.log(`Appwrite Service :: deleteFile :: error `, error);
      return false;
    }
  }

  // File preview
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(
      config.appwriteBucketId, // bucketId
      fileId // fileId
    );
  }
}

const service = new Service();
export default service;
