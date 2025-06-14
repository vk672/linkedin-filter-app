import axios from 'axios';

export interface SuggestionItem {
  id: string;
  name: string;
}


interface ApiResponse {
  filters: SuggestionItem[];
}


const baseURL = process.env.NEXT_PUBLIC_BASE_URL;


const endpoints: Record<string, string> = {
  companyType: '/filter_company_type',
  
};

// Request headers
const headers = {
  'Content-Type': 'application/json',
  'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST || '',
  'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
};

export async function fetchSuggestions(type: string, query: string): Promise<SuggestionItem[]> {
  try {
    const response = await axios.post<ApiResponse>(
      `${baseURL}${endpoints[type]}`,
      { cookies: [] }, 
      {
        headers,
        params: { query },
      }
    );

    const suggestions = response?.data?.filters ?? [];

    return suggestions.map((item) => ({
      id: item.id || item.name,
      name: item.name,
    }));
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    return [];
  }
}
