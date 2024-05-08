import { sanityClient } from 'sanity:client'

export async function getRefs(type, reference) 
{
    const groq = `*[_type == '${type}' && _id in [${reference.map(ref => `"${ref._ref}"`).join(', ')}]]`;
    const item = await sanityClient.fetch(groq);
    return item;
}