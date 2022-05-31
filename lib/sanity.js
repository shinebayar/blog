const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.NODE_ENV === "production",
});

export const previewClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: 'skWfGLkafOf5DwVL1dAJiF2T2jEHrrwz6JacZfhe2SlFSaOyZGGwMtW8YgI4RVKva0p2O0hHFPPQ0fj1jOQdDsSZXGSdJNdjFLZyPNoXILi1OpRIP4P4loJOsiMYR393rN5LqCAnuIIZ21ciE5q2U70HEwTkr5MPfpPzMt9eIUHCueUIaJ2T'
});

export default client;