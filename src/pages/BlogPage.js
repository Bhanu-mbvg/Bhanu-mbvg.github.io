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
            text1 = "These are all the blogs which I have written. I am not very active in writing these blogs but do take out time when I feel I can share some knowledge or skill."
            />
        <BlogList/>
      </div>
    );
} 

export default BlogPage;