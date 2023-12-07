import type { Category } from "@types";

interface GetDownloadURLProps {
  repoName: string;
  executableName: string;
  os: Category;
}

export async function getDownloadURL({
  repoName,
  executableName,
  os,
}: GetDownloadURLProps) {
  const githubApiURL = `https://api.github.com/RaulCatalinas/${repoName}/releases/latest`;

  try {
    const res = await fetch(githubApiURL);
    const { assets } = await res.json();

    const asset = assets.find(
      (asset) => asset.name.includes(executableName) && asset.name.includes(os)
    );

    if (asset) return asset.browser_download_url;
    else
      throw new Error(
        "The executable for the specified operating system wasn't found."
      );
  } catch (error) {
    console.error(error);

    throw error;
  }
}
