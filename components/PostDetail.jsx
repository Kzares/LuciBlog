import moment from 'moment'
import React from 'react'
import {GoCalendar} from 'react-icons/go'

function PostDetail({post}) {


  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="post post-detail">
      <div className="content">
        
        <div className="image">
          <img src={post.featuredImage.url} alt="" />
        </div>

        <h1>{post.title}</h1>


        <div className="details">

          <div className="author">
            <img src={post.author.photo.url} alt="" />
            <h2> {post.author.name} </h2>
          </div>

          <div className="date"> <GoCalendar className='icon'/> {moment(post.createdAt).format('MMM DD, YYYY')} </div>

        </div>

        <div className="raw">
        {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
        

      </div>
    </div>
  )
}

export default PostDetail