import {client} from 'lib/sanity';

export const getAllPosts = async () => {
    const posts = await client.fetch(`*[_type=="post"]{
        _createdAt, 
        title,
        subtitle, 
        'publisher':publisher->{
            name, 
            'picture':image.asset->url
        }, 
        date,
        'image':cover_image.asset->url,
        slug':slug.current}`
         );
    return posts;
}