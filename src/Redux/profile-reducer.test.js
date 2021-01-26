import profileReducer, {deletePost} from "./profile-reducer";
import {addPostCreator} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post', likesCount: 44},
        {id: 3, message: 'It\'s my first post', likesCount: 55},
    ],
};

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostCreator("kekuslol");

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expetation
    expect(newState.posts.length).toBe(4);
});

test('message of new post should be correct ', () => {
    // 1. test data
    let action = addPostCreator("kekuslol");

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expetation
    expect(newState.posts[3].message).toBe("kekuslol");
});

test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expetation
    expect(newState.posts.length).toBe(2);
});


