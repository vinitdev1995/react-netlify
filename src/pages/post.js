import React from "react"
import { Redirect } from "react-router-dom"
import Markdown from "react-markdown"
import Layout from "../components/layout"
import postlist from "../posts.json"
import "./pages.css"

const Post = (props) => {
    const validId = parseInt(props.match.params.id)
    if (!validId) {
        return <Redirect to="/404" />
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.content = post.content ? post.content : "No content given"
            fetchedPost.thumbnail = post.thumbnail ? post.thumbnail : "No thumbnail given"
            postExists = true
        }
    })
    if (postExists === false) {
        return <Redirect to="/404" />
    }
    return (
        <Layout>
            <div className="row">
                <div className="leftcolumn">
                    <div className="card">
                        <h2>{fetchedPost.title}</h2>
                        <p>Published on <b>{fetchedPost.date}</b> by <b>{fetchedPost.author}</b></p>
                        <img src={fetchedPost.thumbnail} style={{height:450, width: '100%', backgroundColor: '#aaaaaa21' }} />
                        <div style={{textAlign: 'center'}}>
                            <Markdown source={fetchedPost.content} escapeHtml={false} />
                        </div>
                    </div>
                </div>
                <div className="rightcolumn">
                    <div className="card">
                        <h3>Popular Post</h3>
                        <div className="fakeimg">Image</div>
                        <br/>
                            <div className="fakeimg">Image</div>
                            <br/>
                                <div className="fakeimg">Image</div>
                    </div>
                    <div className="card">
                        <h3>Follow Me</h3>
                        <p>Some text..</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Post