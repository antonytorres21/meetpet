import { key_Dog, key_Cat } from "../Keys/keys";

export async function getDogs() {
  const headers = new Headers();
  headers.append("x-api-key", key_Dog);
  headers.append("Content-Type", "application/json");
  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://api.thedogapi.com/v1/breeds",
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function calculateTotalPages(totalCount, limit) {
  return Math.ceil(totalCount / limit);
}

export async function getDogsByPage(page, limit) {
  const headers = new Headers();
  headers.append("x-api-key", key_Dog);
  headers.append("Content-Type", "application/json");
  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://api.thedogapi.com/v1/breeds?&limit=${limit}&page=${page}&order=ASC`,
      requestOptions
    );
    const totalCount = parseInt(response.headers.get("Pagination-Count"), 10);
    const totalPages = calculateTotalPages(totalCount, limit);
    const result = await response.json();
    return { result, totalPages };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDogsImages(id) {
  const headers = new Headers();
  headers.append("x-api-key", key_Dog);
  headers.append("Content-Type", "application/json");
  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://api.thedogapi.com/v1/images/search?breed_ids=${id}&limit=10`,
      requestOptions
    );
    const result = await response.json();
    return { result };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCats() {
  const headers = new Headers();
  headers.append("x-api-key", key_Cat);
  headers.append("Content-Type", "application/json");
  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/breeds`,
      requestOptions
    );
    const result = await response.json();
    return { result };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCatsByPage(page, limit) {
  const headers = new Headers();
  headers.append("x-api-key", key_Cat);
  headers.append("Content-Type", "application/json");
  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/breeds?&limit=${limit}&page=${page}&order=ASC`,
      requestOptions
    );
    const totalCount = parseInt(response.headers.get("Pagination-Count"), 10);
    const totalPages = calculateTotalPages(totalCount, limit);
    const result = await response.json();
    return { result, totalPages };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCatsImages(id) {
  const headers = new Headers();
  headers.append("x-api-key", key_Cat);
  headers.append("Content-Type", "application/json");
  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${id}&limit=10`,
      requestOptions
    );
    const result = await response.json();
    return { result };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCountry(code) {
  try {
    const response = await fetch(`https://flagcdn.com/16x12/${code}.png`);
    console.log(response);
    return { response };
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener la bandera del país");
  }
}
