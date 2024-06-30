const envDevelopmentName = 'development';

export const Config = {
    PORT: process.env.PORT || 3334,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017',
    WORK_DIR: process.cwd(),
    PHOTOS_UPLOAD_PATH: process.env.PHOTOS_UPLOAD_PATH,
    PHOTOS_UPLOAD_RESIZE_PATH: process.env.PHOTOS_UPLOAD_RESIZE_PATH,

}