class Post {
    constructor (title) {
        this.title = title
    }

    toSting() {
        return JSON.stringify({
            title: this.title + "narek 123",
            date: new Date()
        })
    }
}

export default Post;