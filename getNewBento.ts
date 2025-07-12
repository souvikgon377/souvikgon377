const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Souvik&g=souvikgon377&x=&l=souvik-gon-412924216&i=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F140043113%3Fv%3D4&p=&z=ea857";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
