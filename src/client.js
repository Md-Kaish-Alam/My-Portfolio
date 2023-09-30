import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID;
const token = import.meta.env.VITE_REACT_APP_SANITY_TOKEN;


export const client = SanityClient({
    projectId: projectId,
    dataset: 'production',
    apiVersion: '2023-08-12',
    useCdn: true,
    token: token,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

