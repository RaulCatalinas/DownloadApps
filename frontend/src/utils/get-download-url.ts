// Types
import type { Category } from '@categories-types'

// Third-Party libraries
import { Octokit } from '@octokit/rest'
import { LocalStorageManager } from './local-storage-manager'

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
  const localStorageManager = new LocalStorageManager()

  try {
    const downloadURLFromLocalStorage =
      localStorageManager.getItem('download-url')

    if (downloadURLFromLocalStorage) return downloadURLFromLocalStorage

    const octokit = new Octokit()

    const { data: repoData } = await octokit.repos.getLatestRelease({
      owner: 'RaulCatalinas',
      repo
    })

    const { assets } = repoData

    const indexOfMatchingAsset = assets.findIndex(
      asset => asset.name === `${executableName}-${os}.zip`
    )

    if (indexOfMatchingAsset === -1) throw new Error('Asset not found')

    const downloadURLFromGitHub =
      assets[indexOfMatchingAsset].browser_download_url

    localStorageManager.setItem({
      key: 'download-url',
      value: downloadURLFromGitHub,
      expiresIn30Days: true
    })

    return downloadURLFromGitHub
  } catch (error) {
    console.error(error)

    throw error
  }
}
