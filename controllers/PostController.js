import postService from '../services/PostService.js';

class PostController {
    async create(req, res) {
        try {
            const post = await postService.create(req.body, req.files.picture)
            res.json(post)
        } catch(e) {
            console.log(e.message);
            res.status(500).json('Server error')
        }
    }

    async getAll(req, res) {
        try {
            const posts = await postService.getAll()
            return res.json(posts)
        } catch (e) {
            console.log(e.message);
            res.status(500).json('Server error')
        }
    }

    async getOne(req, res) {
        try {
            const post = await postService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            console.log(e.message);
            res.status(500).json('Server error')
        }
    }

    async update(req, res) {
        try {
            const newPost = await postService.update(req.body)
            return res.json(newPost)
        } catch (e) {
            console.log(e.message);
            res.status(500).json(e.message);
        }
    }

    async delete(req, res) {
        try {
            console.log(req.params.id);
            const post = await postService.delete(req.params.id)
            res.json(post)
        } catch (e) {
            console.log(e.message);
            res.status(500).json('Server error')
        }
    }
}

export default new PostController()