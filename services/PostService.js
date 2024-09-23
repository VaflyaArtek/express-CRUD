import Post from '../models/PostModel.js';
import fileService from './FileService.js';

class PostService {
    create(post, picture) {
        const fileName = fileService.saveFile(picture);
        return Post.create({...post, picture: fileName,
        });
    }

    getAll() {
        return Post.find();
    }

    getOne(id) {
        if (!id) {
            throw new Error('Enter id');
        }
        return Post.findById(id);
    }

    update(post) {
        if (!post._id) {
            throw new Error('Enter valid post data with an ID');
        }

        return Post.findByIdAndUpdate(post._id, post, {new: true});
    }

    delete(id) {
        if (!id) {
            throw new Error('Enter id');
        }
        return Post.findByIdAndDelete(id);
    }
}

export default new PostService();