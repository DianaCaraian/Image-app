import { IImage } from "../types";
import { CAMPAIGN_REPORT_CONSTS } from "../consts";

export const getRandomImages = async (): Promise<string[]> => {
  try {
    const accessKey = import.meta.env.VITE_ACCESS_KEY;
    const apiUrl = `${import.meta.env.VITE_API_URL}/photos?per_page=${
      CAMPAIGN_REPORT_CONSTS.numberOfRequestedImages
    }`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Client-ID ${accessKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();

    const images = data.map((image: IImage) => image.urls.full);

    return images;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
