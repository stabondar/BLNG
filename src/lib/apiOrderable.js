import { sanityClient } from 'sanity:client'

export async function getSanityOrder(query) 
{
	const response = await sanityClient.fetch([`*[ _type == "${query}"] | order(orderRank asc)`])
	return response
}