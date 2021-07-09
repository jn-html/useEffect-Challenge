import React, { useState } from "react";
import PostList from "./PostList";
function BlogSection() {
  //state = {
    //posts: [],
    //loading: true
  //};
  const [post, setPost] = useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((setPost) => console.log(post));
      console.log('Bye!!')
  }, [post]);
  //componentDidMount() {
    //fetch("https://jsonplaceholder.typicode.com/posts/")
      //.then((res) => res.json())
      //.then((posts) => this.setState({ posts: posts, loading: false }));
  //}
  //componentWillUnmount() {
    //console.log("Bye!");
  //}
    return (
      <div className="App">
        <h1>Welcome, setUser(user)</h1>
        <h2>Here are you favorite articles</h2>
        {this.state.loading ? (
          <h1>loading posts</h1>
        ) : (
          <PostList posts={this.state.posts} />
        )}
        <button onClick={this.props.onLogout}>Logout</button>
      </div>
    );
  }
export default BlogSection;