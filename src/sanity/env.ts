export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  'Missing environment variable: NEXT_PUBLIC_API_TOKEN'
)
export const chattoken = assertValue(
  process.env.NEXT_PUBLIC_CHAT_TOKEN,
  'Missing environment variable: NEXT_PUBLIC_CHAT_TOKEN'
)
export const chatapi = assertValue(
  process.env.NEXT_PUBLIC_CHAT_API,
  'Missing environment variable: NEXT_PUBLIC_CHAT_aPI'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
