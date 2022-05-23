import moment from 'moment';
import { urlFor } from 'lib/api';


export default function PostHeader({post}){
    moment.locale('mn');
    return (
        <div className="blog-detail-header">
            <p className="lead mb-0">
              <img
                src={post.publisher.picture}
                className="rounded-circle mr-3"
                height="50px"
                width="50px"
              />
              {` ${post.publisher.name},  ${moment(post.date).endOf('day').fromNow()}`}
            </p>

            <h1 className="font-weight-bold blog-detail-header-title mb-3">
              {post.title}
            </h1>

            <h2 className="blog-detail-header-subtitle mb-3">
              {post.subtitle}
            </h2>

            <img className="img-fluid rounded" src={urlFor(post.cover_image).height(800).url()} alt={post.cover_image.alt} />
            <div className='code-filename' style={{textAlign:'center'}}>{post.cover_image.alt}</div>
          </div>
    )
}