let video = ['youtube', 'rutube', 'vimeo'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a+b+c);
}

let arr = [1, 2, 3];

log(...arr);