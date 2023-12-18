// Types
import type { Category } from '@categories-types'

// Third-Party libraries
import { Octokit } from '@octokit/rest'

interface GetDownloadURLProps {
  repo: string
  executableName: string
  os: Category
}

export async function getDownloadURL({
  repo,
  executableName,
  os
}: GetDownloadURLProps) {
  const octokit = new Octokit()

  try {
    const { data: repoData } = await octokit.repos.getLatestRelease({
      owner: 'RaulCatalinas',
      repo
    })

    const { assets } = repoData

    const indexOfMatchingAsset = assets.findIndex(
      asset => asset.name === `${executableName}-${os}.zip`
    )

    if (indexOfMatchingAsset === -1) throw new Error('Asset not found')

    const downloadURL = assets[indexOfMatchingAsset].browser_download_url

    return downloadURL
  } catch (error) {
    console.error(error)

    throw error
  }
}
