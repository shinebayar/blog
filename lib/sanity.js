const sanityClient = require('@sanity/client');

export const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    useCdn: process.NODE_ENV === 'production',
});