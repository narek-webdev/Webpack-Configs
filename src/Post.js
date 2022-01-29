class Post {
    constructor (title, image) {
        this.title = title,
        this.image = image
    }

    toSting() {
        return JSON.stringify({
            title: this.title + "narek 123",
            date: new Date(),
            image: this.image
        })
    }
}

export default Post;