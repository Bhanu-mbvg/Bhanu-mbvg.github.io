import React from 'react';

import Header from '../components/Header';
import Title from '../components/Title';
import BlogList from '../components/BlogList';

const BlogPage = () => {
    return(
      <div>
        <Header/>
        <Title
            heading = "My Blogs"
            text1 = "List of all blogs which I have written"
            />
        <BlogList/>
      </div>
    );
} 

export default BlogPage;