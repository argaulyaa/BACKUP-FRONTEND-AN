// Fetch wrapper untuk AN-WEB-SERVICE-* backend.
// Tiap service punya base URL sendiri (5 backend terpisah), auth publik = header x-api-key.
// ponytail: no SWR/React-Query — plain fetch cukup; tambah cache lib kalau butuh revalidation/mutation.

const SERVICES = {
  default: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000",
  login: process.env.NEXT_PUBLIC_API_URL_LOGIN ?? "http://localhost:3011",
  contributor: process.env.NEXT_PUBLIC_API_URL_CONTRIBUTOR ?? "http://localhost:3012",
  alumni: process.env.NEXT_PUBLIC_API_URL_ALUMNI ?? "http://localhost:3013",
  sertifikat: process.env.NEXT_PUBLIC_API_URL_SERTIFIKAT ?? "http://localhost:3014",
  activeMember: process.env.NEXT_PUBLIC_API_URL_ACTIVE_MEMBER ?? "http://localhost:3015",
};

const API_KEY = process.env.NEXT_PUBLIC_API_KEY ?? "";

export class ApiError extends Error {
  constructor(status, body) {
    super(`API error ${status}`);
    this.status = status;
    this.body = body;
  }
}

export async function apiFetch(path, options = {}, service = "default") {
  const base = SERVICES[service] ?? service; // service bisa nama atau URL langsung
  const res = await fetch(`${base}${path}`, {
    ...options,
    headers: { "x-api-key": API_KEY, ...options.headers },
    cache: "no-store",
  });
  const text = await res.text();
  const body = text ? safeJson(text) : null;
  if (!res.ok) throw new ApiError(res.status, body);
  return body;
}

function safeJson(t) {
  try { return JSON.parse(t); } catch { return t; }
}
