const baseUrl = import.meta.env.VITE_BASE_URL;

const authPayload = {
  username: import.meta.env.VITE_USERNAME,
  password: import.meta.env.VITE_PASSWORD,
};

export { baseUrl, authPayload };
